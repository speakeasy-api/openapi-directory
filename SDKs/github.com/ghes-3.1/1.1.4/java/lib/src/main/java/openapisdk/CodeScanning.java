package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class CodeScanning {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CodeScanning(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * codeScanningDeleteAnalysis - Delete a code scanning analysis from a repository
     *
     * Deletes a specified code scanning analysis from a repository. For
     * private repositories, you must use an access token with the `repo` scope. For public repositories,
     * you must use an access token with `public_repo` and `repo:security_events` scopes.
     * GitHub Apps must have the `security_events` write permission to use this endpoint.
     * 
     * You can delete one analysis at a time.
     * To delete a series of analyses, start with the most recent analysis and work backwards.
     * Conceptually, the process is similar to the undo function in a text editor.
     * 
     * **Note**: The ability to delete analyses was introduced in GitHub Enterprise Server 3.1.
     * You can delete analyses that were generated prior to installing this release,
     * however, if you do so, you will lose information about fixed alerts for all such analyses,
     * for the relevant code scanning tool.
     * We recommend that you only delete analyses that were generated with earlier releases
     * if you don't need the details of fixed alerts from pre-3.1 releases.
     * 
     * When you list the analyses for a repository,
     * one or more will be identified as deletable in the response:
     * 
     * ```
     * "deletable": true
     * ```
     * 
     * An analysis is deletable when it's the most recent in a set of analyses.
     * Typically, a repository will have multiple sets of analyses
     * for each enabled code scanning tool,
     * where a set is determined by a unique combination of analysis values:
     * 
     * * `ref`
     * * `tool`
     * * `analysis_key`
     * * `environment`
     * 
     * If you attempt to delete an analysis that is not the most recent in a set,
     * you'll get a 400 response with the message:
     * 
     * ```
     * Analysis specified is not deletable.
     * ```
     * 
     * The response from a successful `DELETE` operation provides you with
     * two alternative URLs for deleting the next analysis in the set
     * (see the example default response below).
     * Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
     * in the set. This is a useful option if you want to preserve at least one analysis
     * for the specified tool in your repository.
     * Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
     * When you delete the last analysis in a set the value of `next_analysis_url` and `confirm_delete_url`
     * in the 200 response is `null`.
     * 
     * As an example of the deletion process,
     * let's imagine that you added a workflow that configured a particular code scanning tool
     * to analyze the code in a repository. This tool has added 15 analyses:
     * 10 on the default branch, and another 5 on a topic branch.
     * You therefore have two separate sets of analyses for this tool.
     * You've now decided that you want to remove all of the analyses for the tool.
     * To do this you must make 15 separate deletion requests.
     * To start, you must find the deletable analysis for one of the sets,
     * step through deleting the analyses in that set,
     * and then repeat the process for the second set.
     * The procedure therefore consists of a nested loop:
     * 
     * **Outer loop**:
     * * List the analyses for the repository, filtered by tool.
     * * Parse this list to find a deletable analysis. If found:
     * 
     *   **Inner loop**:
     *   * Delete the identified analysis.
     *   * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.
     * 
     * The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningDeleteAnalysisResponse codeScanningDeleteAnalysis(openapisdk.models.operations.CodeScanningDeleteAnalysisRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningDeleteAnalysisResponse res = new openapisdk.models.operations.CodeScanningDeleteAnalysisResponse() {{
            codeScanningAnalysisDeletion = null;
            basicError = null;
            scimError = null;
            basicError = null;
            basicError = null;
            codeScanningDeleteAnalysis503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAnalysisDeletion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAnalysisDeletion.class);
                res.codeScanningAnalysisDeletion = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/scim+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimError.class);
                res.scimError = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningDeleteAnalysis503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningDeleteAnalysis503ApplicationJson.class);
                res.codeScanningDeleteAnalysis503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningGetAlert - Get a code scanning alert
     *
     * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     * 
     * **Deprecation notice**:
     * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningGetAlertResponse codeScanningGetAlert(openapisdk.models.operations.CodeScanningGetAlertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningGetAlertResponse res = new openapisdk.models.operations.CodeScanningGetAlertResponse() {{
            codeScanningAlert = null;
            basicError = null;
            basicError = null;
            codeScanningGetAlert503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAlert out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAlert.class);
                res.codeScanningAlert = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningGetAlert503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningGetAlert503ApplicationJson.class);
                res.codeScanningGetAlert503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningGetAnalysis - Get a code scanning analysis for a repository
     *
     * Gets a specified code scanning analysis for a repository.
     * You must use an access token with the `security_events` scope to use this endpoint.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     * 
     * The default JSON response contains fields that describe the analysis.
     * This includes the Git reference and commit SHA to which the analysis relates,
     * the datetime of the analysis, the name of the code scanning tool,
     * and the number of alerts.
     * 
     * The `rules_count` field in the default response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     * 
     * If you use the Accept header `application/sarif+json`,
     * the response contains the analysis data that was uploaded.
     * This is formatted as
     * [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
     * For an example response, see "[Custom media type for code scanning](#custom-media-type-for-code-scanning)."
     * 
     * **Deprecation notice**:
     * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningGetAnalysisResponse codeScanningGetAnalysis(openapisdk.models.operations.CodeScanningGetAnalysisRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningGetAnalysisResponse res = new openapisdk.models.operations.CodeScanningGetAnalysisResponse() {{
            codeScanningAnalysis = null;
            codeScanningGetAnalysis200ApplicationJsonPlusSarifString = null;
            basicError = null;
            basicError = null;
            codeScanningGetAnalysis503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAnalysis out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAnalysis.class);
                res.codeScanningAnalysis = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json+sarif")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.codeScanningGetAnalysis200ApplicationJsonPlusSarifString = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningGetAnalysis503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningGetAnalysis503ApplicationJson.class);
                res.codeScanningGetAnalysis503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningGetSarif - Get information about a SARIF upload
     *
     * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningGetSarifResponse codeScanningGetSarif(openapisdk.models.operations.CodeScanningGetSarifRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningGetSarifResponse res = new openapisdk.models.operations.CodeScanningGetSarifResponse() {{
            codeScanningSarifsStatus = null;
            basicError = null;
            codeScanningGetSarif503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningSarifsStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningSarifsStatus.class);
                res.codeScanningSarifsStatus = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningGetSarif503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningGetSarif503ApplicationJson.class);
                res.codeScanningGetSarif503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningListAlertInstances - List instances of a code scanning alert
     *
     * Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningListAlertInstancesResponse codeScanningListAlertInstances(openapisdk.models.operations.CodeScanningListAlertInstancesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningListAlertInstancesResponse res = new openapisdk.models.operations.CodeScanningListAlertInstancesResponse() {{
            codeScanningAlertInstances = null;
            basicError = null;
            basicError = null;
            codeScanningListAlertInstances503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAlertInstance[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAlertInstance[].class);
                res.codeScanningAlertInstances = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningListAlertInstances503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningListAlertInstances503ApplicationJson.class);
                res.codeScanningListAlertInstances503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningListAlertsForRepo - List code scanning alerts for a repository
     *
     * Lists all open code scanning alerts for the default branch (usually `main`
     * or `master`). You must use an access token with the `security_events` scope to use
     * this endpoint. GitHub Apps must have the `security_events` read permission to use
     * this endpoint.
     * 
     * The response includes a `most_recent_instance` object.
     * This provides details of the most recent instance of this alert
     * for the default branch or for the specified Git reference
     * (if you used `ref` in the request).
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningListAlertsForRepoResponse codeScanningListAlertsForRepo(openapisdk.models.operations.CodeScanningListAlertsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/alerts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningListAlertsForRepoResponse res = new openapisdk.models.operations.CodeScanningListAlertsForRepoResponse() {{
            codeScanningAlertItems = null;
            basicError = null;
            basicError = null;
            codeScanningListAlertsForRepo503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAlertItems[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAlertItems[].class);
                res.codeScanningAlertItems = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningListAlertsForRepo503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningListAlertsForRepo503ApplicationJson.class);
                res.codeScanningListAlertsForRepo503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningListRecentAnalyses - List code scanning analyses for a repository
     *
     * Lists the details of all code scanning analyses for a repository,
     * starting with the most recent.
     * The response is paginated and you can use the `page` and `per_page` parameters
     * to list the analyses you're interested in.
     * By default 30 analyses are listed per page.
     * 
     * The `rules_count` field in the response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     * 
     * You must use an access token with the `security_events` scope to use this endpoint.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     * 
     * **Deprecation notice**:
     * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningListRecentAnalysesResponse codeScanningListRecentAnalyses(openapisdk.models.operations.CodeScanningListRecentAnalysesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/analyses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningListRecentAnalysesResponse res = new openapisdk.models.operations.CodeScanningListRecentAnalysesResponse() {{
            codeScanningAnalyses = null;
            basicError = null;
            basicError = null;
            codeScanningListRecentAnalyses503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAnalysis[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAnalysis[].class);
                res.codeScanningAnalyses = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningListRecentAnalyses503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningListRecentAnalyses503ApplicationJson.class);
                res.codeScanningListRecentAnalyses503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningUpdateAlert - Update a code scanning alert
     *
     * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningUpdateAlertResponse codeScanningUpdateAlert(openapisdk.models.operations.CodeScanningUpdateAlertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningUpdateAlertResponse res = new openapisdk.models.operations.CodeScanningUpdateAlertResponse() {{
            codeScanningAlert = null;
            basicError = null;
            basicError = null;
            codeScanningUpdateAlert503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningAlert out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningAlert.class);
                res.codeScanningAlert = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningUpdateAlert503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningUpdateAlert503ApplicationJson.class);
                res.codeScanningUpdateAlert503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codeScanningUploadSarif - Upload an analysis as SARIF data
     *
     * Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     * 
     * There are two places where you can upload code scanning results.
     *  - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
     *  - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
     * 
     * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
     * 
     * ```
     * gzip -c analysis-data.sarif | base64 -w0
     * ```
     * 
     * SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
     * 
     * The `202 Accepted`, response includes an `id` value.
     * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
     * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
    **/
    public openapisdk.models.operations.CodeScanningUploadSarifResponse codeScanningUploadSarif(openapisdk.models.operations.CodeScanningUploadSarifRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/code-scanning/sarifs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodeScanningUploadSarifResponse res = new openapisdk.models.operations.CodeScanningUploadSarifResponse() {{
            codeScanningSarifsReceipt = null;
            basicError = null;
            basicError = null;
            codeScanningUploadSarif503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeScanningSarifsReceipt out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeScanningSarifsReceipt.class);
                res.codeScanningSarifsReceipt = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 413) {
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodeScanningUploadSarif503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodeScanningUploadSarif503ApplicationJson.class);
                res.codeScanningUploadSarif503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}
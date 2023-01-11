package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Revisions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Revisions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById - Get a revision for a custom action
     *
     * Returns the given version of a custom workflow action.
    **/
    public openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse res = new openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse() {{
            actionRevision = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionRevision out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionRevision.class);
                res.actionRevision = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage - Get all revisions for a custom action
     *
     * Returns a list of revisions for a custom workflow action.
    **/
    public openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/automation/v4/actions/{appId}/{definitionId}/revisions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse res = new openapisdk.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse() {{
            collectionResponseActionRevisionForwardPaging = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CollectionResponseActionRevisionForwardPaging out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CollectionResponseActionRevisionForwardPaging.class);
                res.collectionResponseActionRevisionForwardPaging = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}
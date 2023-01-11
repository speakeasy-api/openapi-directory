package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class System {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public System(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createArchive - Create an archive
     *
     * Create new archive of the given kind
    **/
    public openapisdk.models.operations.CreateArchiveResponse createArchive(openapisdk.models.operations.CreateArchiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/archives/{archiveKind}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateArchiveResponse res = new openapisdk.models.operations.CreateArchiveResponse() {{
            createArchive200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateArchive200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateArchive200ApplicationJson.class);
                res.createArchive200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getHealthcheckResult - Get healthcheck
     *
     * Run and get the result of all checks
    **/
    public openapisdk.models.operations.GetHealthcheckResultResponse getHealthcheckResult() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/healthcheck");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetHealthcheckResultResponse res = new openapisdk.models.operations.GetHealthcheckResultResponse() {{
            getHealthcheckResult200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetHealthcheckResult200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetHealthcheckResult200ApplicationJson.class);
                res.getHealthcheckResult200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStatus - Get server status
     *
     * Get information about current server status
    **/
    public openapisdk.models.operations.GetStatusResponse getStatus() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/status");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStatusResponse res = new openapisdk.models.operations.GetStatusResponse() {{
            getStatus200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetStatus200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetStatus200ApplicationJson.class);
                res.getStatus200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSystemInfo - Get server information
     *
     * Get information about the server version
    **/
    public openapisdk.models.operations.GetSystemInfoResponse getSystemInfo() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/info");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSystemInfoResponse res = new openapisdk.models.operations.GetSystemInfoResponse() {{
            getSystemInfo200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSystemInfo200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSystemInfo200ApplicationJson.class);
                res.getSystemInfo200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getZipArchive - Get an archive as a ZIP
     *
     * Get an archive of the given kind as a zip
    **/
    public openapisdk.models.operations.GetZipArchiveResponse getZipArchive(openapisdk.models.operations.GetZipArchiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/archives/{archiveKind}/zip/{commitId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetZipArchiveResponse res = new openapisdk.models.operations.GetZipArchiveResponse() {{
            getZipArchive200ApplicationOctetStreamBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.getZipArchive200ApplicationOctetStreamBinaryString = out;
            }
        }

        return res;
    }
	
	
    /**
     * listArchives - List archives
     *
     * List configuration archives
    **/
    public openapisdk.models.operations.ListArchivesResponse listArchives(openapisdk.models.operations.ListArchivesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/archives/{archiveKind}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListArchivesResponse res = new openapisdk.models.operations.ListArchivesResponse() {{
            listArchives200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListArchives200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListArchives200ApplicationJson.class);
                res.listArchives200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * purgeSoftware - Trigger batch for cleaning unreferenced software
     *
     * Start the software cleaning batch asynchronously.
    **/
    public openapisdk.models.operations.PurgeSoftwareResponse purgeSoftware() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/maintenance/purgeSoftware");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PurgeSoftwareResponse res = new openapisdk.models.operations.PurgeSoftwareResponse() {{
            purgeSoftware200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PurgeSoftware200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PurgeSoftware200ApplicationJson.class);
                res.purgeSoftware200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * regeneratePolicies - Trigger a new policy generation
     *
     * Trigger a full policy generation
    **/
    public openapisdk.models.operations.RegeneratePoliciesResponse regeneratePolicies() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/regenerate/policies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegeneratePoliciesResponse res = new openapisdk.models.operations.RegeneratePoliciesResponse() {{
            regeneratePolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RegeneratePolicies200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RegeneratePolicies200ApplicationJson.class);
                res.regeneratePolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadAll - Reload both techniques and dynamic groups
     *
     * Reload both techniques and dynamic groups
    **/
    public openapisdk.models.operations.ReloadAllResponse reloadAll() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/reload");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadAllResponse res = new openapisdk.models.operations.ReloadAllResponse() {{
            reloadAll200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadAll200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadAll200ApplicationJson.class);
                res.reloadAll200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadGroups - Reload dynamic groups
     *
     * Reload dynamic groups
    **/
    public openapisdk.models.operations.ReloadGroupsResponse reloadGroups() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/reload/groups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadGroupsResponse res = new openapisdk.models.operations.ReloadGroupsResponse() {{
            reloadGroups200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadGroups200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadGroups200ApplicationJson.class);
                res.reloadGroups200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadTechniques - Reload techniques
     *
     * Reload techniques from local technique library
    **/
    public openapisdk.models.operations.ReloadTechniquesResponse reloadTechniques() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/reload/techniques");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadTechniquesResponse res = new openapisdk.models.operations.ReloadTechniquesResponse() {{
            reloadTechniques200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadTechniques200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadTechniques200ApplicationJson.class);
                res.reloadTechniques200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * restoreArchive - Restore an archive
     *
     * Restore an archive of the given kind for the given moment
    **/
    public openapisdk.models.operations.RestoreArchiveResponse restoreArchive(openapisdk.models.operations.RestoreArchiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/archives/{archiveKind}/restore/{archiveRestoreKind}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RestoreArchiveResponse res = new openapisdk.models.operations.RestoreArchiveResponse() {{
            restoreArchive200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RestoreArchive200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RestoreArchive200ApplicationJson.class);
                res.restoreArchive200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePolicies - Trigger update of policies
     *
     * Update configuration policies if needed
    **/
    public openapisdk.models.operations.UpdatePoliciesResponse updatePolicies() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/system/update/policies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePoliciesResponse res = new openapisdk.models.operations.UpdatePoliciesResponse() {{
            updatePolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdatePolicies200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdatePolicies200ApplicationJson.class);
                res.updatePolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}
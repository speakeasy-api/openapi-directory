package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ResourceGroups {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ResourceGroups(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1ResourcegroupsId - Deletes a resource group object.
     *
     * Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
    **/
    public openapisdk.models.operations.DeleteSetupV1ResourcegroupsIdResponse deleteSetupV1ResourcegroupsId(openapisdk.models.operations.DeleteSetupV1ResourcegroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1ResourcegroupsIdResponse res = new openapisdk.models.operations.DeleteSetupV1ResourcegroupsIdResponse() {{
            resourceGroupViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceGroupViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceGroupViewModel.class);
                res.resourceGroupViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Resourcegroups - Returns a list of resourcegroups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1ResourcegroupsResponse getSetupV1Resourcegroups(openapisdk.models.operations.GetSetupV1ResourcegroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcegroupsResponse res = new openapisdk.models.operations.GetSetupV1ResourcegroupsResponse() {{
            resourceGroupListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.resourceGroupListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1ResourcegroupsId - Returns a resourceGroup object.
     *
     * The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
    **/
    public openapisdk.models.operations.GetSetupV1ResourcegroupsIdResponse getSetupV1ResourcegroupsId(openapisdk.models.operations.GetSetupV1ResourcegroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1ResourcegroupsIdResponse res = new openapisdk.models.operations.GetSetupV1ResourcegroupsIdResponse() {{
            resourceGroupViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceGroupViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceGroupViewModel.class);
                res.resourceGroupViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Resourcegroups - Creates a new resource group object.
     *
     * Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
     * Email Address and a Name are required for creating a new resource.
    **/
    public openapisdk.models.operations.PostSetupV1ResourcegroupsResponse postSetupV1Resourcegroups(openapisdk.models.operations.PostSetupV1ResourcegroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1ResourcegroupsResponse res = new openapisdk.models.operations.PostSetupV1ResourcegroupsResponse() {{
            resourceGroupViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceGroupViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceGroupViewModel.class);
                res.resourceGroupViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcegroupsId - Updates a resource group object.
     *
     * Use this endpoint to update a resource group.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcegroupsIdResponse putSetupV1ResourcegroupsId(openapisdk.models.operations.PutSetupV1ResourcegroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ResourcegroupsIdResponse res = new openapisdk.models.operations.PutSetupV1ResourcegroupsIdResponse() {{
            resourceGroupViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceGroupViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceGroupViewModel.class);
                res.resourceGroupViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1ResourcegroupsIdRecover - Recovers a resource group object.
     *
     * Use this endpoint to recover a deleted resource group.
    **/
    public openapisdk.models.operations.PutSetupV1ResourcegroupsIdRecoverResponse putSetupV1ResourcegroupsIdRecover(openapisdk.models.operations.PutSetupV1ResourcegroupsIdRecoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/resourcegroups/{id}/recover", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1ResourcegroupsIdRecoverResponse res = new openapisdk.models.operations.PutSetupV1ResourcegroupsIdRecoverResponse() {{
            resourceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceViewModel.class);
                res.resourceViewModel = out;
            }
        }

        return res;
    }
	
}
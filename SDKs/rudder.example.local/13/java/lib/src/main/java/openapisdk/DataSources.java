package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class DataSources {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public DataSources(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * reloadAllDatasourcesAllNodes - Update properties from data sources
     *
     * Update properties from all data source on all nodes. The call is asynchronous.
    **/
    public openapisdk.models.operations.ReloadAllDatasourcesAllNodesResponse reloadAllDatasourcesAllNodes() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources/reload");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadAllDatasourcesAllNodesResponse res = new openapisdk.models.operations.ReloadAllDatasourcesAllNodesResponse() {{
            reloadAllDatasourcesAllNodes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadAllDatasourcesAllNodes200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadAllDatasourcesAllNodes200ApplicationJson.class);
                res.reloadAllDatasourcesAllNodes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadAllDatasourcesOneNode - Update properties for one node from all data sources
     *
     * Update properties from all data sources on one nodes. The call is asynchronous.
    **/
    public openapisdk.models.operations.ReloadAllDatasourcesOneNodeResponse reloadAllDatasourcesOneNode(openapisdk.models.operations.ReloadAllDatasourcesOneNodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/nodes/{nodeId}/fetchData", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadAllDatasourcesOneNodeResponse res = new openapisdk.models.operations.ReloadAllDatasourcesOneNodeResponse() {{
            reloadAllDatasourcesOneNode200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadAllDatasourcesOneNode200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadAllDatasourcesOneNode200ApplicationJson.class);
                res.reloadAllDatasourcesOneNode200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadOneDatasourceAllNodes - Update properties from data sources
     *
     * Update properties from all data source on all nodes. The call is asynchronous.
    **/
    public openapisdk.models.operations.ReloadOneDatasourceAllNodesResponse reloadOneDatasourceAllNodes(openapisdk.models.operations.ReloadOneDatasourceAllNodesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources/reload/{datasourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadOneDatasourceAllNodesResponse res = new openapisdk.models.operations.ReloadOneDatasourceAllNodesResponse() {{
            reloadOneDatasourceAllNodes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadOneDatasourceAllNodes200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadOneDatasourceAllNodes200ApplicationJson.class);
                res.reloadOneDatasourceAllNodes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reloadOneDatasourceOneNode - Update properties for one node from a data source
     *
     * Update properties from a data source on one nodes. The call is asynchronous.
    **/
    public openapisdk.models.operations.ReloadOneDatasourceOneNodeResponse reloadOneDatasourceOneNode(openapisdk.models.operations.ReloadOneDatasourceOneNodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/nodes/{nodeId}/fetchData/{datasourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReloadOneDatasourceOneNodeResponse res = new openapisdk.models.operations.ReloadOneDatasourceOneNodeResponse() {{
            reloadOneDatasourceOneNode200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReloadOneDatasourceOneNode200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReloadOneDatasourceOneNode200ApplicationJson.class);
                res.reloadOneDatasourceOneNode200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDataSource - Create a data source
     *
     * Create a new data source
    **/
    public openapisdk.models.operations.CreateDataSourceResponse createDataSource(openapisdk.models.operations.CreateDataSourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDataSourceResponse res = new openapisdk.models.operations.CreateDataSourceResponse() {{
            createDataSource200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateDataSource200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateDataSource200ApplicationJson.class);
                res.createDataSource200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDataSource - Delete a data source
     *
     * Delete a data source configuration
    **/
    public openapisdk.models.operations.DeleteDataSourceResponse deleteDataSource(openapisdk.models.operations.DeleteDataSourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources/{datasourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDataSourceResponse res = new openapisdk.models.operations.DeleteDataSourceResponse() {{
            deleteDataSource200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteDataSource200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteDataSource200ApplicationJson.class);
                res.deleteDataSource200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllDataSources - List all data sources
     *
     * Get the configuration of all present data sources
    **/
    public openapisdk.models.operations.GetAllDataSourcesResponse getAllDataSources() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAllDataSourcesResponse res = new openapisdk.models.operations.GetAllDataSourcesResponse() {{
            getAllDataSources200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAllDataSources200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAllDataSources200ApplicationJson.class);
                res.getAllDataSources200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDataSource - Get data source configuration
     *
     * Get the configuration of a data source
    **/
    public openapisdk.models.operations.GetDataSourceResponse getDataSource(openapisdk.models.operations.GetDataSourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources/{datasourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDataSourceResponse res = new openapisdk.models.operations.GetDataSourceResponse() {{
            getDataSource200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetDataSource200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetDataSource200ApplicationJson.class);
                res.getDataSource200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDataSource - Update a data source configuration
     *
     * Update the configuration of a data source
    **/
    public openapisdk.models.operations.UpdateDataSourceResponse updateDataSource(openapisdk.models.operations.UpdateDataSourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/datasources/{datasourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDataSourceResponse res = new openapisdk.models.operations.UpdateDataSourceResponse() {{
            updateDataSource200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateDataSource200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateDataSource200ApplicationJson.class);
                res.updateDataSource200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}
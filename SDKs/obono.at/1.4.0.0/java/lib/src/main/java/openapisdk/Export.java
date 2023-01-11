package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Export {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Export(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    public openapisdk.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse getExportCsvRegistrierkassenRegistrierkasseUuidBelege(openapisdk.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/csv/registrierkassen/{registrierkasseUuid}/belege", request.pathParams);
        
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

        openapisdk.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse res = new openapisdk.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse getExportDep131RegistrierkassenRegistrierkasseUuidBelege(openapisdk.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/dep131/registrierkassen/{registrierkasseUuid}/belege", request.pathParams);
        
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

        openapisdk.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse res = new openapisdk.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse getExportDep7RegistrierkassenRegistrierkasseUuidBelege(openapisdk.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/dep7/registrierkassen/{registrierkasseUuid}/belege", request.pathParams);
        
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

        openapisdk.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse res = new openapisdk.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse getExportGobdRegistrierkassenRegistrierkasseUuid(openapisdk.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/gobd/registrierkassen/{registrierkasseUuid}", request.pathParams);
        
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

        openapisdk.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse res = new openapisdk.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportHtmlBelegeBelegUuidResponse getExportHtmlBelegeBelegUuid(openapisdk.models.operations.GetExportHtmlBelegeBelegUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/html/belege/{belegUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetExportHtmlBelegeBelegUuidResponse res = new openapisdk.models.operations.GetExportHtmlBelegeBelegUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportPdfBelegeBelegUuidResponse getExportPdfBelegeBelegUuid(openapisdk.models.operations.GetExportPdfBelegeBelegUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/pdf/belege/{belegUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetExportPdfBelegeBelegUuidResponse res = new openapisdk.models.operations.GetExportPdfBelegeBelegUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportQrBelegeBelegUuidResponse getExportQrBelegeBelegUuid(openapisdk.models.operations.GetExportQrBelegeBelegUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/qr/belege/{belegUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetExportQrBelegeBelegUuidResponse res = new openapisdk.models.operations.GetExportQrBelegeBelegUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportThermalPrintBelegeBelegUuidResponse getExportThermalPrintBelegeBelegUuid(openapisdk.models.operations.GetExportThermalPrintBelegeBelegUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/thermal-print/belege/{belegUuid}", request.pathParams);
        
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

        openapisdk.models.operations.GetExportThermalPrintBelegeBelegUuidResponse res = new openapisdk.models.operations.GetExportThermalPrintBelegeBelegUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse getExportXlsRegistrierkassenRegistrierkasseUuidBelege(openapisdk.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/export/xls/registrierkassen/{registrierkasseUuid}/belege", request.pathParams);
        
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

        openapisdk.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse res = new openapisdk.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}
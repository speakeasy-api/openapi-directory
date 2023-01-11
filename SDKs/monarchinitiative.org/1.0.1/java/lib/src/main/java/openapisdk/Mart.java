package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Mart {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Mart(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getMartCaseAssociationsResource - Bulk download of case associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    public openapisdk.models.operations.GetMartCaseAssociationsResourceResponse getMartCaseAssociationsResource(openapisdk.models.operations.GetMartCaseAssociationsResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mart/case/{object_category}/{taxon}", request.pathParams);
        
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

        openapisdk.models.operations.GetMartCaseAssociationsResourceResponse res = new openapisdk.models.operations.GetMartCaseAssociationsResourceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getMartDiseaseAssociationsResource - Bulk download of disease associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    public openapisdk.models.operations.GetMartDiseaseAssociationsResourceResponse getMartDiseaseAssociationsResource(openapisdk.models.operations.GetMartDiseaseAssociationsResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mart/disease/{object_category}/{taxon}", request.pathParams);
        
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

        openapisdk.models.operations.GetMartDiseaseAssociationsResourceResponse res = new openapisdk.models.operations.GetMartDiseaseAssociationsResourceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getMartGeneAssociationsResource - Bulk download of gene associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    public openapisdk.models.operations.GetMartGeneAssociationsResourceResponse getMartGeneAssociationsResource(openapisdk.models.operations.GetMartGeneAssociationsResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mart/gene/{object_category}/{taxon}", request.pathParams);
        
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

        openapisdk.models.operations.GetMartGeneAssociationsResourceResponse res = new openapisdk.models.operations.GetMartGeneAssociationsResourceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getMartOrthologAssociationsResource - Bulk download of orthologs
    **/
    public openapisdk.models.operations.GetMartOrthologAssociationsResourceResponse getMartOrthologAssociationsResource(openapisdk.models.operations.GetMartOrthologAssociationsResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mart/ortholog/{taxon1}/{taxon2}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMartOrthologAssociationsResourceResponse res = new openapisdk.models.operations.GetMartOrthologAssociationsResourceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getMartParalogAssociationsResource - Bulk download of paralogs
    **/
    public openapisdk.models.operations.GetMartParalogAssociationsResourceResponse getMartParalogAssociationsResource(openapisdk.models.operations.GetMartParalogAssociationsResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mart/paralog/{taxon1}/{taxon2}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMartParalogAssociationsResourceResponse res = new openapisdk.models.operations.GetMartParalogAssociationsResourceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}
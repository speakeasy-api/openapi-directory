package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class V1Tax {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public V1Tax(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * taxRatesByCountryCode - Tax rates by Country Code
     *
     * Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax
     * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
     * <ul>
     *   <li>CombinedRate</li>
     *   <li>StateRate</li>
     *   <li>CountyRate</li>
     *   <li>CityRate</li>
     *   <li>SpecialRate</li>
     * </ul>
     * <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
     *   var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};
     *   var taxrates_url = '/api/v1/';
     *   if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
     *   jQuery.support.cors = true;
     *   jQuery.ajax({
     *       url: taxrates_url+taxrates_endpoint,
     *       type: 'get',
     *       method: 'get',
     *       dataType: "json",
     *       data: taxrates_params,
     *       beforeSend: function (request) {
     *               request.withCredentials = true;
     *               request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
     *       },
     *       headers: {
     *         "accept": "application/json"
     *       },
     *       contentType: 'application/json; charset=utf-8',
     *       success: function (data) {
     *         //Maintain errors inside success because the API may return 200 in general, but different code inside
     *           if(data.ErrorCode=='404' || data.ErrorCode=='500'){
     *             //Maintain errors here
     *             console.log(data.ErrorMessage);
     *             return false;
     *           }else{
     *             var rates = [];
     *             var i=0;
     *             jQuery.each(data, function(k, v) {
     *                 if(v.hasOwnProperty("taxes")){
     *                     jQuery.each(v.taxes, function(m, w) {
     *                         rates[i] = [];
     *                         //Only showing standard rate type
     *                         if( w.Type == "standard" ){
     *                             rates[i][0] = w.Country;
     *                             rates[i][1] = w.Type;
     *                             rates[i][2] = w.data_value;
     *                             i++;
     *                         }
     *                     });
     *                 }
     *             //Now you have all your rates inside rates variable.
     *             }).fail(function(xhr) {
     *                     //Maintain your errors here
     *                     return false;
     *             });
     *             return true;
     *   }else{
     *     //Not logged into taxrates.io
     *     //Maintain your errors here
     *     return false;
     *   }</code></pre>
     * 
    **/
    public openapisdk.models.operations.TaxRatesByCountryCodeResponse taxRatesByCountryCode(openapisdk.models.operations.TaxRatesByCountryCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/tax/countrycode");
        
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

        openapisdk.models.operations.TaxRatesByCountryCodeResponse res = new openapisdk.models.operations.TaxRatesByCountryCodeResponse() {{
            taxRatesByCountryCode200ApplicationJSONObject = null;
            taxRatesByCountryCode500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxRatesByCountryCode200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxRatesByCountryCode200ApplicationJson.class);
                res.taxRatesByCountryCode200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxRatesByCountryCode500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxRatesByCountryCode500ApplicationJson.class);
                res.taxRatesByCountryCode500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * taxRatesByIpAddress - Tax rates by IP address
     *
     * Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax
     * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
     * <ul>
     *   <li>CombinedRate</li>
     *   <li>StateRate</li>
     *   <li>CountyRate</li>
     *   <li>CityRate</li>
     *   <li>SpecialRate</li>
     * </ul>
     * <pre><code class="js">var taxrates_endpoint = 'tax/ip';
     *   var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};
     *   var taxrates_url = '/api/v1/';
     *   if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
     *   jQuery.support.cors = true;
     *   jQuery.ajax({
     *       url: taxrates_url+taxrates_endpoint,
     *       type: 'get',
     *       method: 'get',
     *       dataType: "json",
     *       data: taxrates_params,
     *       beforeSend: function (request) {
     *               request.withCredentials = true;
     *               request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
     *       },
     *       headers: {
     *         "accept": "application/json"
     *       },
     *       contentType: 'application/json; charset=utf-8',
     *       success: function (data) {
     *         //Maintain errors inside success because the API may return 200 in general, but different code inside
     *           if(data.ErrorCode=='404' || data.ErrorCode=='500'){
     *             //Maintain errors here
     *             console.log(data.ErrorMessage);
     *             return false;
     *           }else{
     *             var rates = [];
     *             var i=0;
     *             jQuery.each(data, function(k, v) {
     *                 if(v.hasOwnProperty("taxes")){
     *                     jQuery.each(v.taxes, function(m, w) {
     *                         rates[i] = [];
     *                         //Only showing standard rate type
     *                         if( w.Type == "standard" ){
     *                             rates[i][0] = w.Country;
     *                             rates[i][1] = w.Type;
     *                             rates[i][2] = w.data_value;
     *                             i++;
     *                         }
     *                     });
     *                 }
     *             //Now you have all your rates inside rates variable.
     *             }).fail(function(xhr) {
     *                     //Maintain your errors here
     *                     return false;
     *             });
     *             return true;
     *   }else{
     *     //Not logged into taxrates.io
     *     //Maintain your errors here
     *     return false;
     *   }</code></pre>
     * 
    **/
    public openapisdk.models.operations.TaxRatesByIpAddressResponse taxRatesByIpAddress(openapisdk.models.operations.TaxRatesByIpAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/tax/ip");
        
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

        openapisdk.models.operations.TaxRatesByIpAddressResponse res = new openapisdk.models.operations.TaxRatesByIpAddressResponse() {{
            taxRatesByIpAddress200ApplicationJSONObjects = null;
            taxRatesByIpAddress500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxRatesByIpAddress200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxRatesByIpAddress200ApplicationJson[].class);
                res.taxRatesByIpAddress200ApplicationJSONObjects = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxRatesByIpAddress500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxRatesByIpAddress500ApplicationJson.class);
                res.taxRatesByIpAddress500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}
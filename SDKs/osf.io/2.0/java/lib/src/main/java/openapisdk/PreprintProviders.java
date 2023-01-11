package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class PreprintProviders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PreprintProviders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * preprintProviderDetail - Retrieve a preprint provider
     *
     * Retrieves the details of a preprint provider.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * 
     * #### Acceptable Subjects Structure
     * Each preprint provider specifies acceptable subjects.
     * `subjects_acceptable` is an array found in `attributes`.
     * Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.
     * 
     * 
     *     "subjects_acceptable": [
     *         [
     *             [
     *                 # Parent Subject:
     *                 # Architecture
     *                 "584240d954be81056ceca9e5",
     * 
     *                 # Child Subject:
     *                 # Architectural Engineering
     *                 "584240da54be81056cecac87"
     *             ],
     *             # Include all Architectural Engineering's children:
     *             true
     *         ],
     *         [
     *             [
     *                 # Parent Subject:
     *                 # Engineering
     *                 "584240da54be81056cecaca9",
     * 
     *                 # Child Subject:
     *                 # Aerospace Engineering
     *                 "584240db54be81056cecacd6",
     * 
     *                 # Grandchild Subject:
     *                 # Aerodynamics and Fluid Mechanics
     *                 "584240da54be81056cecaa74"
     *             ],
     *             # All nestings 3 deep must be false
     *             false
     *         ]
     *     ]
     * 
     * The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.
    **/
    public openapisdk.models.operations.PreprintProviderDetailResponse preprintProviderDetail(openapisdk.models.operations.PreprintProviderDetailRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprint_providers/{preprint_provider_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintProviderDetailResponse res = new openapisdk.models.operations.PreprintProviderDetailResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprintProviderLicensesList - List all licenses
     *
     * 
     * A paginated list of the licenses allowed bya preprint provider.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.PreprintProviderLicensesListResponse preprintProviderLicensesList(openapisdk.models.operations.PreprintProviderLicensesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprint_providers/{preprint_provider_id}/licenses/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintProviderLicensesListResponse res = new openapisdk.models.operations.PreprintProviderLicensesListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprintProviderList - List all preprint providers
     *
     * 
     * A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.
     * 
     * Preprint Providers may be filtered by their `id`, `name`,  and `description`
    **/
    public openapisdk.models.operations.PreprintProviderListResponse preprintProviderList() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprint_providers/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintProviderListResponse res = new openapisdk.models.operations.PreprintProviderListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprintProviderTaxonomiesList - List all taxonomies
     *
     * 
     * A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.PreprintProviderTaxonomiesListResponse preprintProviderTaxonomiesList(openapisdk.models.operations.PreprintProviderTaxonomiesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprint_providers/{preprint_provider_id}/taxonomies/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintProviderTaxonomiesListResponse res = new openapisdk.models.operations.PreprintProviderTaxonomiesListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprintProvidersPreprintsList - List all preprints
     *
     * 
     * A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
     * 
     * The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * 
     * #### Filtering
     * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.
     * 
     * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
    **/
    public openapisdk.models.operations.PreprintProvidersPreprintsListResponse preprintProvidersPreprintsList(openapisdk.models.operations.PreprintProvidersPreprintsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprint_providers/{preprint_provider_id}/preprints/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintProvidersPreprintsListResponse res = new openapisdk.models.operations.PreprintProvidersPreprintsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}


package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;


public class SDK {
	public static final String[] SERVERS = {
		"https://api.peoplefinderspro.com",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * search - Search
     *
     * ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
     * 
     * Perform a search:
     * 
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIIDVerification
     * 
     * 2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street, Unit 102",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     * 
     * 3.  Submit your search
     * 
     * A complete list of JSON request properties follows.
     * 
     * + <code>FirstName</code>= null (optional, string) ... First name.
     * 
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     * 
     * + <code>LastName</code> = null (optional, string) ... Last name.
     * 
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     * 
     * + <code>Age</code> = null (optional, int) ... Age.
     * 
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     * 
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     * 
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    public openapisdk.models.operations.SearchResponse search(openapisdk.models.operations.SearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/identity/verify_id");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SearchResponse res = new openapisdk.models.operations.SearchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postAddressAutocomplete - Search
     *
     * ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
     * 
     * Perform a search:
     * 
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIAddressAutoComplete
     * 
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Input":"1821 Q"
     *             }
     *     ~~~
     * 
     * 3.  Submit your search
     * 
     * The JSON request should have parts of the address.
     * 
     * + <code>Input</code> = null (optional, string) ... address.
    **/
    public openapisdk.models.operations.PostAddressAutocompleteResponse postAddressAutocomplete(openapisdk.models.operations.PostAddressAutocompleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/address/autocomplete");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAddressAutocompleteResponse res = new openapisdk.models.operations.PostAddressAutocompleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postContactEnrich - Search
     *
     * ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
     * 
     * Perform a search:
     * 
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIContactEnrich
     * 
     * 2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     * 
     * 3.  Submit your search
     * 
     * A complete list of JSON request properties follows.
     * 
     * + <code>FirstName</code>= null (optional, string) ... First name.
     * 
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     * 
     * + <code>LastName</code> = null (optional, string) ... Last name.
     * 
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     * 
     * + <code>Age</code> = null (optional, int) ... Age.
     * 
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     * 
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     * 
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    public openapisdk.models.operations.PostContactEnrichResponse postContactEnrich(openapisdk.models.operations.PostContactEnrichRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/contact/enrich");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostContactEnrichResponse res = new openapisdk.models.operations.PostContactEnrichResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postEmailEnrich - Search
     *
     * ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
     * 
     * Perform a search:
     * 
     * 1. Add your Access Profile username and password to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIEmailID
     * 
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Email":"johnsmith@somedomain"
     *             }
     *     ~~~
     * 
     * 3.  Submit your search
     * 
     * The JSON request should have an email.
     * 
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    public openapisdk.models.operations.PostEmailEnrichResponse postEmailEnrich(openapisdk.models.operations.PostEmailEnrichRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/email/enrich");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostEmailEnrichResponse res = new openapisdk.models.operations.PostEmailEnrichResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postPhoneEnrich - Search
     *
     * ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
     * 
     * Perform a search:
     * 
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPICallerID
     * 
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Phone":"(123) 456-7890"
     *             }
     *     ~~~
     * 
     * 3.  Submit your search
     * 
     * The JSON request should have a phone number.
     * 
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
    **/
    public openapisdk.models.operations.PostPhoneEnrichResponse postPhoneEnrich(openapisdk.models.operations.PostPhoneEnrichRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/enrich");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPhoneEnrichResponse res = new openapisdk.models.operations.PostPhoneEnrichResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}
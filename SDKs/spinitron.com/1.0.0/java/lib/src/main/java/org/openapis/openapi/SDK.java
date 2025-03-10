/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.SpeakeasyHTTPClient;

/**
 * ## Notes
 * 
 * **Tutorial demo** using this API is at [https://spinitron.com/v2-api-demo/](https://spinitron.com/v2-api-demo/). For web integration using iframes and/or JavaScript instead of an API, see [https://spinitron.github.io/v2-web-integration/](https://spinitron.github.io/v2-web-integration/).
 * 
 * **Your API key** is found in the Spinitron web app. Log in to Spinitron and go to *Automation &amp; API* in the *Admin* menu.
 * 
 * **Authenticate** by presenting your API key using either HTTP Bearer Authorization
 * (preferred)
 * 
 *     curl -H 'Authorization: Bearer YOURAPIKEY' 'https://spinitron.com/api/spins'
 * 
 * or in the query parameter `access-token` (less secure owing to webserver
 * log files)
 * 
 *     curl 'https://spinitron.com/api/spins?access-token=YOURAPIKEY'
 * 
 * **Limit** per page of results is 20 by default and miximally 200.
 * 
 * **Try it out** below works to
 * generate example cURL requests but not to get responses from Spinitron. We
 * do not accept queries sent from web browsers. Copy-paste the cURL commands
 * and run them from your computer.
 * 
 * **Cache** the data you get from the API if you are using it in web or mobile integration. It's not ok to query the API on *every* page request you serve. The [demo](https://spinitron.com/v2-api-demo/) shows how easy it can be to implement a file cache.
 * 
 * An extension to this API with access to all stations for partner applications is available. Contact us.
 * 
 */
public class SDK {
	/**
	 * SERVERS contains the list of server urls available to the SDK.
	 */
	public static final String[] SERVERS = {
        "https://spinitron.com/api",
	};
  	
    public Persona persona;
    public Playlist playlist;
    public Show show;
    public Spin spin;	

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private org.openapis.openapi.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";
	/**
	 * The Builder class allows the configuration of a new instance of the SDK.
	 */
	public static class Builder {
		private HTTPClient client;
		private org.openapis.openapi.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		/**
		 * Allows the default HTTP client to be overridden with a custom implementation.
		 * @param client The HTTP client to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		/**
		 * Configures the SDK to use the provided security details.
		 * @param security The security details to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setSecurity(org.openapis.openapi.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		/**
		 * Allows the overriding of the default server URL.
		 * @param serverUrl The server URL to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		/**
		 * Allows the overriding of the default server URL  with a templated URL populated with the provided parameters.
		 * @param serverUrl The server URL to use for all requests.
		 * @param params The parameters to use when templating the URL.
		 * @return The builder instance.
		 */
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		/**
		 * Builds a new instance of the SDK.
		 * @return The SDK instance.
		 * @throws Exception Thrown if the SDK could not be built.
		 */
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	/**
	 * Get a new instance of the SDK builder to configure a new instance of the SDK.
	 * @return The SDK builder instance.
	 */
	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, org.openapis.openapi.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = org.openapis.openapi.utils.Utils.templateUrl(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}

		if (this._serverUrl.endsWith("/")) {
            this._serverUrl = this._serverUrl.substring(0, this._serverUrl.length() - 1);
        }

		
		
		this.persona = new Persona(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.playlist = new Playlist(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.show = new Show(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.spin = new Spin(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
}


package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;


/** SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl**/
public class SDK {
	public static final String[] SERVERS = {
		"http://patrowl.local",
		"http://localhost:5001/engines/nmap/",
		"http://localhost:5004/engines/ssllabs/",
		"http://localhost:5005/engines/arachni/",
		"http://localhost:5006/engines/owl_dns/",
		"http://localhost:5007/engines/virustotal/",
		"http://localhost:5008/engines/urlvoid/",
		"http://localhost:5009/engines/cortex/",
		"http://localhost:5012/engines/owl_leaks/",
		"http://localhost:5013/engines/owl_code/",
		"http://localhost:5014/engines/sslscan/",
	};
  	
  	public PatrowlEngine patrowlEngine;	

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
		
		this.patrowlEngine = new PatrowlEngine(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
	
}
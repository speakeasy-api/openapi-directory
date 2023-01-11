

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;



public class SDK {
	public static final String[] SERVERS = {
		"https://market.openchannel.io/v2",
	};
  	
  	public AppsFindAndModifyApps appsFindAndModifyApps;
  	public CustomGatewayProcessPaymentsAndRefunds customGatewayProcessPaymentsAndRefunds;
  	public DeveloperAccountsFindAndModifyDeveloperAccounts developerAccountsFindAndModifyDeveloperAccounts;
  	public DevelopersFindAndModifyDevelopers developersFindAndModifyDevelopers;
  	public EventsFindEvents eventsFindEvents;
  	public FilesUploadFiles filesUploadFiles;
  	public MarketsThisMarketplace marketsThisMarketplace;
  	public OwnershipFindOwnership ownershipFindOwnership;
  	public PermissionAddAndRemovePermissions permissionAddAndRemovePermissions;
  	public ReviewsFindAndModifyReviews reviewsFindAndModifyReviews;
  	public StatsFindMarketplaceStatistics statsFindMarketplaceStatistics;
  	public StripeGatewayProcessPaymentsAndRefunds stripeGatewayProcessPaymentsAndRefunds;
  	public TransactionsFindPaymentsAndRefunds transactionsFindPaymentsAndRefunds;
  	public UserAccountsFindAndModifyUserAccounts userAccountsFindAndModifyUserAccounts;
  	public UsersFindAndModifyUsers usersFindAndModifyUsers;	

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
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
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
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
		
		this.appsFindAndModifyApps = new AppsFindAndModifyApps(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customGatewayProcessPaymentsAndRefunds = new CustomGatewayProcessPaymentsAndRefunds(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.developerAccountsFindAndModifyDeveloperAccounts = new DeveloperAccountsFindAndModifyDeveloperAccounts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.developersFindAndModifyDevelopers = new DevelopersFindAndModifyDevelopers(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.eventsFindEvents = new EventsFindEvents(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.filesUploadFiles = new FilesUploadFiles(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketsThisMarketplace = new MarketsThisMarketplace(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.ownershipFindOwnership = new OwnershipFindOwnership(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.permissionAddAndRemovePermissions = new PermissionAddAndRemovePermissions(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.reviewsFindAndModifyReviews = new ReviewsFindAndModifyReviews(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.statsFindMarketplaceStatistics = new StatsFindMarketplaceStatistics(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.stripeGatewayProcessPaymentsAndRefunds = new StripeGatewayProcessPaymentsAndRefunds(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.transactionsFindPaymentsAndRefunds = new TransactionsFindPaymentsAndRefunds(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.userAccountsFindAndModifyUserAccounts = new UserAccountsFindAndModifyUserAccounts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.usersFindAndModifyUsers = new UsersFindAndModifyUsers(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
	
}
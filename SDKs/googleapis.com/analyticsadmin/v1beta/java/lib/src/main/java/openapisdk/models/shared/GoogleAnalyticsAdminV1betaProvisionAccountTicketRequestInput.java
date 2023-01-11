package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput
 * Request message for ProvisionAccountTicket RPC.
**/
public class GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GoogleAnalyticsAdminV1betaAccountInput account;
    public GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput withAccount(GoogleAnalyticsAdminV1betaAccountInput account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
}
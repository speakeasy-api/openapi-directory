package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse
 * Response message for ProvisionAccountTicket RPC.
**/
public class GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountTicketId")
    public String accountTicketId;
    public GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse withAccountTicketId(String accountTicketId) {
        this.accountTicketId = accountTicketId;
        return this;
    }
}
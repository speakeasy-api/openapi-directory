package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest
 * Request message for AcknowledgeUserDataCollection RPC.
**/
public class GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgement")
    public String acknowledgement;
    public GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest withAcknowledgement(String acknowledgement) {
        this.acknowledgement = acknowledgement;
        return this;
    }
}
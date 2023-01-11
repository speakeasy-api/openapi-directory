package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPurchasesAcknowledgeRequest
 * Request for the purchases.subscriptions.acknowledge API.
**/
public class SubscriptionPurchasesAcknowledgeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerPayload")
    public String developerPayload;
    public SubscriptionPurchasesAcknowledgeRequest withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
}
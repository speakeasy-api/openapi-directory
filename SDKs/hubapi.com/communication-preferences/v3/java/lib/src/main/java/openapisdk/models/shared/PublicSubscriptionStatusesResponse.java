package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicSubscriptionStatusesResponse
 * A collection of subscription statuses for a contact.
**/
public class PublicSubscriptionStatusesResponse {
    @JsonProperty("recipient")
    public String recipient;
    public PublicSubscriptionStatusesResponse withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonProperty("subscriptionStatuses")
    public PublicSubscriptionStatus[] subscriptionStatuses;
    public PublicSubscriptionStatusesResponse withSubscriptionStatuses(PublicSubscriptionStatus[] subscriptionStatuses) {
        this.subscriptionStatuses = subscriptionStatuses;
        return this;
    }
}
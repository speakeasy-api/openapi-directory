package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1UnregisterSubscriberRequest
 * Request Message for UnregisterSubscriber.
**/
public class GoogleCloudChannelV1UnregisterSubscriberRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudChannelV1UnregisterSubscriberRequest withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RegisterSubscriberRequest
 * Request Message for RegisterSubscriber.
**/
public class GoogleCloudChannelV1RegisterSubscriberRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudChannelV1RegisterSubscriberRequest withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
}
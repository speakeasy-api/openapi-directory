package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyPushConfigRequest
 * Request for the ModifyPushConfig method.
**/
public class ModifyPushConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushConfig")
    public PushConfig pushConfig;
    public ModifyPushConfigRequest withPushConfig(PushConfig pushConfig) {
        this.pushConfig = pushConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public ModifyPushConfigRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}
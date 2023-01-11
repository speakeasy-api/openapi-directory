package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyCapability
 * Two factor authentication related configuration
**/
public class VerifyCapability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public VerifyCapabilityVersionEnum version;
    public VerifyCapability withVersion(VerifyCapabilityVersionEnum version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public VerifyCapabilityWebhooks webhooks;
    public VerifyCapability withWebhooks(VerifyCapabilityWebhooks webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}
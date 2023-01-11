package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributePropagationSettings
 * Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
**/
public class AttributePropagationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AttributePropagationSettings withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public AttributePropagationSettings withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputCredentials")
    public AttributePropagationSettingsOutputCredentialsEnum[] outputCredentials;
    public AttributePropagationSettings withOutputCredentials(AttributePropagationSettingsOutputCredentialsEnum[] outputCredentials) {
        this.outputCredentials = outputCredentials;
        return this;
    }
}
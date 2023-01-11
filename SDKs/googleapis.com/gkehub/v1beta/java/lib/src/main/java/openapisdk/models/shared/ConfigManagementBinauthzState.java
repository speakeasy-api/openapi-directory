package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementBinauthzState
 * State for Binauthz
**/
public class ConfigManagementBinauthzState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public ConfigManagementBinauthzVersion version;
    public ConfigManagementBinauthzState withVersion(ConfigManagementBinauthzVersion version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public ConfigManagementBinauthzStateWebhookEnum webhook;
    public ConfigManagementBinauthzState withWebhook(ConfigManagementBinauthzStateWebhookEnum webhook) {
        this.webhook = webhook;
        return this;
    }
}
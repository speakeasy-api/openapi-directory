package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementBinauthzVersion
 * The version of binauthz.
**/
public class ConfigManagementBinauthzVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookVersion")
    public String webhookVersion;
    public ConfigManagementBinauthzVersion withWebhookVersion(String webhookVersion) {
        this.webhookVersion = webhookVersion;
        return this;
    }
}
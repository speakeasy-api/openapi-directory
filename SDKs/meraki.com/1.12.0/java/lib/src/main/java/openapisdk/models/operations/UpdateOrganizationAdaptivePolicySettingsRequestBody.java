package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationAdaptivePolicySettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledNetworks")
    public String[] enabledNetworks;
    public UpdateOrganizationAdaptivePolicySettingsRequestBody withEnabledNetworks(String[] enabledNetworks) {
        this.enabledNetworks = enabledNetworks;
        return this;
    }
}
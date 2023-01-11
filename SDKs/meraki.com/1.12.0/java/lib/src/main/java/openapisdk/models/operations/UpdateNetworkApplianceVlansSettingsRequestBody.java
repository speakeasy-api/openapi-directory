package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVlansSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlansEnabled")
    public Boolean vlansEnabled;
    public UpdateNetworkApplianceVlansSettingsRequestBody withVlansEnabled(Boolean vlansEnabled) {
        this.vlansEnabled = vlansEnabled;
        return this;
    }
}
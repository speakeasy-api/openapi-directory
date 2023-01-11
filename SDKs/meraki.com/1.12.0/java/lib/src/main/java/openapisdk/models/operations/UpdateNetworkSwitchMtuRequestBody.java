package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchMtuRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMtuSize")
    public Long defaultMtuSize;
    public UpdateNetworkSwitchMtuRequestBody withDefaultMtuSize(Long defaultMtuSize) {
        this.defaultMtuSize = defaultMtuSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrides")
    public UpdateNetworkSwitchMtuRequestBodyOverrides[] overrides;
    public UpdateNetworkSwitchMtuRequestBody withOverrides(UpdateNetworkSwitchMtuRequestBodyOverrides[] overrides) {
        this.overrides = overrides;
        return this;
    }
}
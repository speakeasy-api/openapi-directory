package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchDscpToCosMappingsRequestBody {
    @JsonProperty("mappings")
    public UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[] mappings;
    public UpdateNetworkSwitchDscpToCosMappingsRequestBody withMappings(UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
}
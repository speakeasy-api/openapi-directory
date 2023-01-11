package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings {
    @JsonProperty("cos")
    public Long cos;
    public UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings withCos(Long cos) {
        this.cos = cos;
        return this;
    }
    @JsonProperty("dscp")
    public Long dscp;
    public UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings withDscp(Long dscp) {
        this.dscp = dscp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings withTitle(String title) {
        this.title = title;
        return this;
    }
}
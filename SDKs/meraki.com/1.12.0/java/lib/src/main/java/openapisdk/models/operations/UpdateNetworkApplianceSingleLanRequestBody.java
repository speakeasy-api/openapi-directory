package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceSingleLanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceIp")
    public String applianceIp;
    public UpdateNetworkApplianceSingleLanRequestBody withApplianceIp(String applianceIp) {
        this.applianceIp = applianceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateNetworkApplianceSingleLanRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}
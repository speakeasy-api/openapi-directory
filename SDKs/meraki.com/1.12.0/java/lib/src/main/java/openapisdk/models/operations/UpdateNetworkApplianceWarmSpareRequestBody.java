package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceWarmSpareRequestBody {
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkApplianceWarmSpareRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spareSerial")
    public String spareSerial;
    public UpdateNetworkApplianceWarmSpareRequestBody withSpareSerial(String spareSerial) {
        this.spareSerial = spareSerial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkMode")
    public String uplinkMode;
    public UpdateNetworkApplianceWarmSpareRequestBody withUplinkMode(String uplinkMode) {
        this.uplinkMode = uplinkMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualIp1")
    public String virtualIp1;
    public UpdateNetworkApplianceWarmSpareRequestBody withVirtualIp1(String virtualIp1) {
        this.virtualIp1 = virtualIp1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualIp2")
    public String virtualIp2;
    public UpdateNetworkApplianceWarmSpareRequestBody withVirtualIp2(String virtualIp2) {
        this.virtualIp2 = virtualIp2;
        return this;
    }
}
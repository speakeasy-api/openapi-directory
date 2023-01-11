package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTypePolicies")
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[] deviceTypePolicies;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody withDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[] deviceTypePolicies) {
        this.deviceTypePolicies = deviceTypePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}
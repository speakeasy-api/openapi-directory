package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass
 * Performance class setting for this uplink preference rule
**/
public class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtinPerformanceClassName")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum builtinPerformanceClassName;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass withBuiltinPerformanceClassName(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum builtinPerformanceClassName) {
        this.builtinPerformanceClassName = builtinPerformanceClassName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPerformanceClassId")
    public String customPerformanceClassId;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass withCustomPerformanceClassId(String customPerformanceClassId) {
        this.customPerformanceClassId = customPerformanceClassId;
        return this;
    }
    @JsonProperty("type")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum type;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass withType(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customPerformanceClassId")
    public String customPerformanceClassId;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams withCustomPerformanceClassId(String customPerformanceClassId) {
        this.customPerformanceClassId = customPerformanceClassId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
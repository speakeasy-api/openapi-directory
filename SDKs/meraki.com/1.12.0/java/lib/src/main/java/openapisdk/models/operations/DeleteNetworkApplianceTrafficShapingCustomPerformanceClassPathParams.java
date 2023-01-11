package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customPerformanceClassId")
    public String customPerformanceClassId;
    public DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams withCustomPerformanceClassId(String customPerformanceClassId) {
        this.customPerformanceClassId = customPerformanceClassId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
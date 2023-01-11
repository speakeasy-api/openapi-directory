package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
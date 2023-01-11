package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
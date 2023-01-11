package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkTrafficAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkTrafficAnalysisPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
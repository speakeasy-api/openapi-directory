package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkTrafficAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkTrafficAnalysisPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
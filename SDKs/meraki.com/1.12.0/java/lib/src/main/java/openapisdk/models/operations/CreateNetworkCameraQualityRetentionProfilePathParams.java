package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkCameraQualityRetentionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkCameraQualityRetentionProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
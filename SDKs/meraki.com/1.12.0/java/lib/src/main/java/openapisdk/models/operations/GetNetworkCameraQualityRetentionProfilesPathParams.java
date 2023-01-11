package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkCameraQualityRetentionProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkCameraQualityRetentionProfilesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}
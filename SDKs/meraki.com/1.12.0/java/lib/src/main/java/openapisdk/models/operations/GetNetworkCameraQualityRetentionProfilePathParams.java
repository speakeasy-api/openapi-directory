package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkCameraQualityRetentionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkCameraQualityRetentionProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qualityRetentionProfileId")
    public String qualityRetentionProfileId;
    public GetNetworkCameraQualityRetentionProfilePathParams withQualityRetentionProfileId(String qualityRetentionProfileId) {
        this.qualityRetentionProfileId = qualityRetentionProfileId;
        return this;
    }
}
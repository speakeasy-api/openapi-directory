package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkCameraQualityRetentionProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkCameraQualityRetentionProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qualityRetentionProfileId")
    public String qualityRetentionProfileId;
    public DeleteNetworkCameraQualityRetentionProfilePathParams withQualityRetentionProfileId(String qualityRetentionProfileId) {
        this.qualityRetentionProfileId = qualityRetentionProfileId;
        return this;
    }
}
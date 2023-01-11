package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssetSid")
    public String assetSid;
    public ListAssetVersionPathParams withAssetSid(String assetSid) {
        this.assetSid = assetSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListAssetVersionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}
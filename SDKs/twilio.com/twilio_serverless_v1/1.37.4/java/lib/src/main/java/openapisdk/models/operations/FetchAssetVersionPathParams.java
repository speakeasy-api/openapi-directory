package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAssetVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssetSid")
    public String assetSid;
    public FetchAssetVersionPathParams withAssetSid(String assetSid) {
        this.assetSid = assetSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchAssetVersionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAssetVersionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
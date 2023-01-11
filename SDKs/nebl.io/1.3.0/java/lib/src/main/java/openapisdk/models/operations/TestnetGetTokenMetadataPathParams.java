package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public TestnetGetTokenMetadataPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
}
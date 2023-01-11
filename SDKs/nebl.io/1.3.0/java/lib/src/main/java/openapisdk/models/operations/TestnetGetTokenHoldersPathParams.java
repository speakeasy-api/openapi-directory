package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenHoldersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public TestnetGetTokenHoldersPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
}
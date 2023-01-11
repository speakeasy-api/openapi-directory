package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenHoldersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public GetTokenHoldersPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
}
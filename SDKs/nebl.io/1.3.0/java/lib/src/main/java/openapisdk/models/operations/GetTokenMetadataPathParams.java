package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public GetTokenMetadataPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
}
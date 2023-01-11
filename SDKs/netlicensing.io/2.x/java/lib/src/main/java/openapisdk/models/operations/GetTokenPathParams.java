package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenNumber")
    public String tokenNumber;
    public GetTokenPathParams withTokenNumber(String tokenNumber) {
        this.tokenNumber = tokenNumber;
        return this;
    }
}
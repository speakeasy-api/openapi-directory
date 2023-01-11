package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenNumber")
    public String tokenNumber;
    public DeleteTokenPathParams withTokenNumber(String tokenNumber) {
        this.tokenNumber = tokenNumber;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSigningBasketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public DeleteSigningBasketPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningBasketStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public GetSigningBasketStatusPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
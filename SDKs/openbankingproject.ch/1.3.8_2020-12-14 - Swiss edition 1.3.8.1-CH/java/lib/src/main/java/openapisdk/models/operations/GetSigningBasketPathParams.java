package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningBasketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public GetSigningBasketPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
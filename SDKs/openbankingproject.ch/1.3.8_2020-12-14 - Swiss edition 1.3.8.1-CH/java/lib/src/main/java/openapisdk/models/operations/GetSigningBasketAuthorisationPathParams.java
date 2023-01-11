package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningBasketAuthorisationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public GetSigningBasketAuthorisationPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
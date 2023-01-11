package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSigningBasketAuthorisationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public StartSigningBasketAuthorisationPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
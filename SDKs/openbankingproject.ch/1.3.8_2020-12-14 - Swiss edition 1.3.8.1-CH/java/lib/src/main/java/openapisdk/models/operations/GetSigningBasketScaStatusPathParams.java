package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningBasketScaStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public GetSigningBasketScaStatusPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public GetSigningBasketScaStatusPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
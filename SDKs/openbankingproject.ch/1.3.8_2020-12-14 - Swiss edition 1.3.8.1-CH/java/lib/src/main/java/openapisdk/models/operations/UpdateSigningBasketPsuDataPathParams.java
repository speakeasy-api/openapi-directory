package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSigningBasketPsuDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public UpdateSigningBasketPsuDataPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basketId")
    public String basketId;
    public UpdateSigningBasketPsuDataPathParams withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
}
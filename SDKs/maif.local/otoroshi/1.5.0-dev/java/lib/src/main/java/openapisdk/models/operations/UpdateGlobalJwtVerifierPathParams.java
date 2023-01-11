package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalJwtVerifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=verifierId")
    public String verifierId;
    public UpdateGlobalJwtVerifierPathParams withVerifierId(String verifierId) {
        this.verifierId = verifierId;
        return this;
    }
}
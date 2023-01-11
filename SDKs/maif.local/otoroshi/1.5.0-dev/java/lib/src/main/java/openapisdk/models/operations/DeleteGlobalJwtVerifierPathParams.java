package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGlobalJwtVerifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=verifierId")
    public String verifierId;
    public DeleteGlobalJwtVerifierPathParams withVerifierId(String verifierId) {
        this.verifierId = verifierId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGlobalJwtVerifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=verifierId")
    public String verifierId;
    public PatchGlobalJwtVerifierPathParams withVerifierId(String verifierId) {
        this.verifierId = verifierId;
        return this;
    }
}
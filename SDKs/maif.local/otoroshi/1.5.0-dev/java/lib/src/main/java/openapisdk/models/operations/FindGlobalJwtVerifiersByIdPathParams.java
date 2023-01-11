package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindGlobalJwtVerifiersByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=verifierId")
    public String verifierId;
    public FindGlobalJwtVerifiersByIdPathParams withVerifierId(String verifierId) {
        this.verifierId = verifierId;
        return this;
    }
}
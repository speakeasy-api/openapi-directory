package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConstraintPermutationsForEntitiesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public GetConstraintPermutationsForEntitiesHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}
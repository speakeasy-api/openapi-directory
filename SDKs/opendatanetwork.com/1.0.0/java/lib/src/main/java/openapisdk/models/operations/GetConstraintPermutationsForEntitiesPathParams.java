package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConstraintPermutationsForEntitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable")
    public String variable;
    public GetConstraintPermutationsForEntitiesPathParams withVariable(String variable) {
        this.variable = variable;
        return this;
    }
}
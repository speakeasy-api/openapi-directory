package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteParameterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parameterId")
    public String parameterId;
    public DeleteParameterPathParams withParameterId(String parameterId) {
        this.parameterId = parameterId;
        return this;
    }
}
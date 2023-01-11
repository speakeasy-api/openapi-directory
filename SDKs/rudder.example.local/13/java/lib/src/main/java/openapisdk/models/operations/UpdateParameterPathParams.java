package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateParameterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parameterId")
    public String parameterId;
    public UpdateParameterPathParams withParameterId(String parameterId) {
        this.parameterId = parameterId;
        return this;
    }
}
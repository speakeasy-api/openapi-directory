package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParameterDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parameterId")
    public String parameterId;
    public ParameterDetailsPathParams withParameterId(String parameterId) {
        this.parameterId = parameterId;
        return this;
    }
}
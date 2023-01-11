package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaySchedulesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPaySchedulesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDependentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public CreateDependentPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}
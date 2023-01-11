package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public GetEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}
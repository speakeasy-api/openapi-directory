package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public EditEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditEmployeePathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}
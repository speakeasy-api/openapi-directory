package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmployeeSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public PostEmployeeSecretPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostEmployeeSecretPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPayInstructionTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetAllPayInstructionTagsPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllPayInstructionTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
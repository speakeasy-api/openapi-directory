package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayInstructionTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeletePayInstructionTagPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayInstructionTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayInstructionId")
    public String payInstructionId;
    public DeletePayInstructionTagPathParams withPayInstructionId(String payInstructionId) {
        this.payInstructionId = payInstructionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeletePayInstructionTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
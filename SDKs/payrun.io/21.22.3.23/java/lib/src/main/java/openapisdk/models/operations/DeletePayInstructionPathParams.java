package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeletePayInstructionPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayInstructionId")
    public String payInstructionId;
    public DeletePayInstructionPathParams withPayInstructionId(String payInstructionId) {
        this.payInstructionId = payInstructionId;
        return this;
    }
}
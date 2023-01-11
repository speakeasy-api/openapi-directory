package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayRunEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeletePayRunEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayRunEmployeePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayRunId")
    public String payRunId;
    public DeletePayRunEmployeePathParams withPayRunId(String payRunId) {
        this.payRunId = payRunId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayScheduleId")
    public String payScheduleId;
    public DeletePayRunEmployeePathParams withPayScheduleId(String payScheduleId) {
        this.payScheduleId = payScheduleId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayLineFromEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetPayLineFromEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayLineFromEmployeePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayLineId")
    public String payLineId;
    public GetPayLineFromEmployeePathParams withPayLineId(String payLineId) {
        this.payLineId = payLineId;
        return this;
    }
}
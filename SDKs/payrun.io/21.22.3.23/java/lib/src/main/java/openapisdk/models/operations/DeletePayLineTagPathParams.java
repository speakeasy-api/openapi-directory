package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayLineTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeletePayLineTagPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayLineTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayLineId")
    public String payLineId;
    public DeletePayLineTagPathParams withPayLineId(String payLineId) {
        this.payLineId = payLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeletePayLineTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
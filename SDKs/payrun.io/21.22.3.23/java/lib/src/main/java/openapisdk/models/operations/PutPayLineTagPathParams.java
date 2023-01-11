package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayLineTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public PutPayLineTagPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutPayLineTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayLineId")
    public String payLineId;
    public PutPayLineTagPathParams withPayLineId(String payLineId) {
        this.payLineId = payLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutPayLineTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
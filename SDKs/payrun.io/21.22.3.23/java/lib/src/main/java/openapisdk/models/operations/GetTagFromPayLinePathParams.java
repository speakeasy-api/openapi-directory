package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromPayLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetTagFromPayLinePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromPayLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayLineId")
    public String payLineId;
    public GetTagFromPayLinePathParams withPayLineId(String payLineId) {
        this.payLineId = payLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromPayLinePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
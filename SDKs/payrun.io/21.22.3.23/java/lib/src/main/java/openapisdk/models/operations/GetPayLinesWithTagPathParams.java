package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayLinesWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetPayLinesWithTagPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayLinesWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetPayLinesWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
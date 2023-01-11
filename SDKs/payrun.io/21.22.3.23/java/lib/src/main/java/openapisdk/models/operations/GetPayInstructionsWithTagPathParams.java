package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayInstructionsWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetPayInstructionsWithTagPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayInstructionsWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetPayInstructionsWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}
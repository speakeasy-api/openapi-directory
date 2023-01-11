package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetTagsFromEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagsFromEmployeePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
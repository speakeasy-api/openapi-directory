package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportingInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostReportingInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
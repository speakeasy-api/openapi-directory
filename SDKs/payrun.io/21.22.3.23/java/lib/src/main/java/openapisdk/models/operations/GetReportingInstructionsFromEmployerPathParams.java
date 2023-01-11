package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportingInstructionsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetReportingInstructionsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
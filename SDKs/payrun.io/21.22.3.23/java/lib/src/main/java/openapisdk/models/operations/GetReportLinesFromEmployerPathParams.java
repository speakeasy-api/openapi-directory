package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportLinesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetReportLinesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
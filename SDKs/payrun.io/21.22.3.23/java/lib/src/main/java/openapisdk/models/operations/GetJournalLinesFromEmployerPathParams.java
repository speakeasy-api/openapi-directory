package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalLinesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalLinesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
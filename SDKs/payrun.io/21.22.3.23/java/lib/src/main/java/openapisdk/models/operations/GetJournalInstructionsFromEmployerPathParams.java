package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalInstructionsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalInstructionsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
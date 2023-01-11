package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostJournalInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostJournalInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
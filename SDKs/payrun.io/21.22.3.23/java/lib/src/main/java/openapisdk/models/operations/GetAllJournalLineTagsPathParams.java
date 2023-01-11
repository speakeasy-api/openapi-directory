package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllJournalLineTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllJournalLineTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}
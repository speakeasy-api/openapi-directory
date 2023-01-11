package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationsFromPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject")
    public String subject;
    public GetAssociationsFromPathParams withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationsBetweenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetAssociationsBetweenPathParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject")
    public String subject;
    public GetAssociationsBetweenPathParams withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}
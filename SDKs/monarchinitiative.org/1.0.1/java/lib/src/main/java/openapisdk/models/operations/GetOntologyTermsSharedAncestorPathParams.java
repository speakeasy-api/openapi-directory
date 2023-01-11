package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermsSharedAncestorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetOntologyTermsSharedAncestorPathParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject")
    public String subject;
    public GetOntologyTermsSharedAncestorPathParams withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}
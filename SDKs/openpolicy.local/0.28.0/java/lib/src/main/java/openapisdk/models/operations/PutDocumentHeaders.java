package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDocumentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public PutDocumentHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}
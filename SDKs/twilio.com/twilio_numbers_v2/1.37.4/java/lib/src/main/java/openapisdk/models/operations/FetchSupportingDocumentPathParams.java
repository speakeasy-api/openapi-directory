package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSupportingDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSupportingDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
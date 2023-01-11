package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSupportingDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSupportingDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
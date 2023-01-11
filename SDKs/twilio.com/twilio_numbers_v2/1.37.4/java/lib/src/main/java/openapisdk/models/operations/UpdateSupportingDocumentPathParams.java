package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSupportingDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateSupportingDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
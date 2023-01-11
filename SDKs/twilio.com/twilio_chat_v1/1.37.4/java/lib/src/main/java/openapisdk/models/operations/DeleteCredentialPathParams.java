package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCredentialPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
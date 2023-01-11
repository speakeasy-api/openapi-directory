package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCredentialPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCredentialPublicKeyPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
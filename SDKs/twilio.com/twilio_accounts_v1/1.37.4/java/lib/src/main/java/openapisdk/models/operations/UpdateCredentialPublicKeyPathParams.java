package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateCredentialPublicKeyPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateCredentialPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
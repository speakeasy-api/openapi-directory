package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteSipCredentialPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CredentialListSid")
    public String credentialListSid;
    public DeleteSipCredentialPathParams withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSipCredentialPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
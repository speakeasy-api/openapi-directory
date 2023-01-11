package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipCredentialPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CredentialListSid")
    public String credentialListSid;
    public ListSipCredentialPathParams withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
}
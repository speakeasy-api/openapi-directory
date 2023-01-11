package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialListCreateCredentialListRequest {
    @SpeakeasyMetadata("form:name=CredentialListSid")
    public String credentialListSid;
    public CreateCredentialListCreateCredentialListRequest withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
}
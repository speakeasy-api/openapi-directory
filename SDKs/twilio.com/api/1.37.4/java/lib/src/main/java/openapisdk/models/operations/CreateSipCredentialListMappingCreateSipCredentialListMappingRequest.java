package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest {
    @SpeakeasyMetadata("form:name=CredentialListSid")
    public String credentialListSid;
    public CreateSipCredentialListMappingCreateSipCredentialListMappingRequest withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
}
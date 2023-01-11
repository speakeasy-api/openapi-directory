package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest {
    @SpeakeasyMetadata("form:name=CredentialListSid")
    public String credentialListSid;
    public CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
}
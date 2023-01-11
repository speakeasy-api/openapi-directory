package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest {
    @SpeakeasyMetadata("form:name=CredentialListSid")
    public String credentialListSid;
    public CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
}
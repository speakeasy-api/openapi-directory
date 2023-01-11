package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialCreateSipCredentialRequest {
    @SpeakeasyMetadata("form:name=Password")
    public String password;
    public CreateSipCredentialCreateSipCredentialRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("form:name=Username")
    public String username;
    public CreateSipCredentialCreateSipCredentialRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}
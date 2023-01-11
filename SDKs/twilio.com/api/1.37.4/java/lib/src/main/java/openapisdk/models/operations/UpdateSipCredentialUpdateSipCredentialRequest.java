package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipCredentialUpdateSipCredentialRequest {
    @SpeakeasyMetadata("form:name=Password")
    public String password;
    public UpdateSipCredentialUpdateSipCredentialRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}
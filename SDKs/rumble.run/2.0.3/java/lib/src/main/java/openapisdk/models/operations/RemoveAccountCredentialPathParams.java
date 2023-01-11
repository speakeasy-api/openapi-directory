package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAccountCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credential_id")
    public String credentialId;
    public RemoveAccountCredentialPathParams withCredentialId(String credentialId) {
        this.credentialId = credentialId;
        return this;
    }
}
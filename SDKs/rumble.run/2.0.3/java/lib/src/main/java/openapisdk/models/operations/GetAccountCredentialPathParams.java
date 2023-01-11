package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credential_id")
    public String credentialId;
    public GetAccountCredentialPathParams withCredentialId(String credentialId) {
        this.credentialId = credentialId;
        return this;
    }
}
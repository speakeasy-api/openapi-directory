package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetRecoveryCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public SetRecoveryCredentialPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
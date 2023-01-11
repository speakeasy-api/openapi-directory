package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminRemoveAuthorizedSshKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminRemoveAuthorizedSshKeyRequestBody request;
    public EnterpriseAdminRemoveAuthorizedSshKeyRequest withRequest(EnterpriseAdminRemoveAuthorizedSshKeyRequestBody request) {
        this.request = request;
        return this;
    }
}
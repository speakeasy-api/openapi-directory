package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsRemovePublicKeyRequest {
    public CloudshellUsersEnvironmentsRemovePublicKeyPathParams pathParams;
    public CloudshellUsersEnvironmentsRemovePublicKeyRequest withPathParams(CloudshellUsersEnvironmentsRemovePublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudshellUsersEnvironmentsRemovePublicKeyQueryParams queryParams;
    public CloudshellUsersEnvironmentsRemovePublicKeyRequest withQueryParams(CloudshellUsersEnvironmentsRemovePublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemovePublicKeyRequest request;
    public CloudshellUsersEnvironmentsRemovePublicKeyRequest withRequest(openapisdk.models.shared.RemovePublicKeyRequest request) {
        this.request = request;
        return this;
    }
    public CloudshellUsersEnvironmentsRemovePublicKeySecurity security;
    public CloudshellUsersEnvironmentsRemovePublicKeyRequest withSecurity(CloudshellUsersEnvironmentsRemovePublicKeySecurity security) {
        this.security = security;
        return this;
    }
}
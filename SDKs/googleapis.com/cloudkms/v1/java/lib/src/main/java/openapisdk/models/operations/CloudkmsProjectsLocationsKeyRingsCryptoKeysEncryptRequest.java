package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EncryptRequest request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest withRequest(openapisdk.models.shared.EncryptRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity security) {
        this.security = security;
        return this;
    }
}
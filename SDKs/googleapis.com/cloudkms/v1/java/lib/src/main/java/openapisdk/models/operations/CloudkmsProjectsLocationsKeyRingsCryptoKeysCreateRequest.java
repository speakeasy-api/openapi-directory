package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CryptoKeyInput request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest withRequest(openapisdk.models.shared.CryptoKeyInput request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}
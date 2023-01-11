package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DecryptRequest request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest withRequest(openapisdk.models.shared.DecryptRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity security) {
        this.security = security;
        return this;
    }
}
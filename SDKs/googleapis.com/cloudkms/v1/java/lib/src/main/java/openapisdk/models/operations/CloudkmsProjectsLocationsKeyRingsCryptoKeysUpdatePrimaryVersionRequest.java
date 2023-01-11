package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCryptoKeyPrimaryVersionRequest request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest withRequest(openapisdk.models.shared.UpdateCryptoKeyPrimaryVersionRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity security) {
        this.security = security;
        return this;
    }
}
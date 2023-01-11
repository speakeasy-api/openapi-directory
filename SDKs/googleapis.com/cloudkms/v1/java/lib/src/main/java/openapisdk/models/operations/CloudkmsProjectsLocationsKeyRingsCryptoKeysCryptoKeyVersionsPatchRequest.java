package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CryptoKeyVersionInput request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest withRequest(openapisdk.models.shared.CryptoKeyVersionInput request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}
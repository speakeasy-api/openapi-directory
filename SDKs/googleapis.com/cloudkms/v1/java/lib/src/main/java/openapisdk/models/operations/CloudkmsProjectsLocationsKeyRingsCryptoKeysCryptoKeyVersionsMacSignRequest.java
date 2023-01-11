package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MacSignRequest request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest withRequest(openapisdk.models.shared.MacSignRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity security) {
        this.security = security;
        return this;
    }
}
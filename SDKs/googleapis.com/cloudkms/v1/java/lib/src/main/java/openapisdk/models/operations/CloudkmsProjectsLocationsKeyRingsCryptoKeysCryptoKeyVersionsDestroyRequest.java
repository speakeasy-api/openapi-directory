package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity security) {
        this.security = security;
        return this;
    }
}
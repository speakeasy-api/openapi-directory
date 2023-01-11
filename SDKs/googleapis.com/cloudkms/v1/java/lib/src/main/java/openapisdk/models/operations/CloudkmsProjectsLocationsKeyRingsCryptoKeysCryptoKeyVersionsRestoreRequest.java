package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest {
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestorePathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest withPathParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity security;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest withSecurity(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity security) {
        this.security = security;
        return this;
    }
}
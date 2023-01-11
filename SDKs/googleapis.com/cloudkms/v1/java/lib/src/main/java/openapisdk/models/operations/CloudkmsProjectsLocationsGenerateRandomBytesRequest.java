package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsGenerateRandomBytesRequest {
    public CloudkmsProjectsLocationsGenerateRandomBytesPathParams pathParams;
    public CloudkmsProjectsLocationsGenerateRandomBytesRequest withPathParams(CloudkmsProjectsLocationsGenerateRandomBytesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsGenerateRandomBytesQueryParams queryParams;
    public CloudkmsProjectsLocationsGenerateRandomBytesRequest withQueryParams(CloudkmsProjectsLocationsGenerateRandomBytesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateRandomBytesRequest request;
    public CloudkmsProjectsLocationsGenerateRandomBytesRequest withRequest(openapisdk.models.shared.GenerateRandomBytesRequest request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsGenerateRandomBytesSecurity security;
    public CloudkmsProjectsLocationsGenerateRandomBytesRequest withSecurity(CloudkmsProjectsLocationsGenerateRandomBytesSecurity security) {
        this.security = security;
        return this;
    }
}
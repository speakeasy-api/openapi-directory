package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSharesCreateRequest {
    public FileProjectsLocationsInstancesSharesCreatePathParams pathParams;
    public FileProjectsLocationsInstancesSharesCreateRequest withPathParams(FileProjectsLocationsInstancesSharesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesSharesCreateQueryParams queryParams;
    public FileProjectsLocationsInstancesSharesCreateRequest withQueryParams(FileProjectsLocationsInstancesSharesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShareInput request;
    public FileProjectsLocationsInstancesSharesCreateRequest withRequest(openapisdk.models.shared.ShareInput request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesSharesCreateSecurity security;
    public FileProjectsLocationsInstancesSharesCreateRequest withSecurity(FileProjectsLocationsInstancesSharesCreateSecurity security) {
        this.security = security;
        return this;
    }
}
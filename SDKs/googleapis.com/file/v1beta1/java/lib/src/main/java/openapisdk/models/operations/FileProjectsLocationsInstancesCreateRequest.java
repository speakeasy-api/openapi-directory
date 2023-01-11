package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesCreateRequest {
    public FileProjectsLocationsInstancesCreatePathParams pathParams;
    public FileProjectsLocationsInstancesCreateRequest withPathParams(FileProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesCreateQueryParams queryParams;
    public FileProjectsLocationsInstancesCreateRequest withQueryParams(FileProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public FileProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesCreateSecurity security;
    public FileProjectsLocationsInstancesCreateRequest withSecurity(FileProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}
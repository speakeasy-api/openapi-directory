package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesRestoreRequest {
    public FileProjectsLocationsInstancesRestorePathParams pathParams;
    public FileProjectsLocationsInstancesRestoreRequest withPathParams(FileProjectsLocationsInstancesRestorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesRestoreQueryParams queryParams;
    public FileProjectsLocationsInstancesRestoreRequest withQueryParams(FileProjectsLocationsInstancesRestoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreInstanceRequest request;
    public FileProjectsLocationsInstancesRestoreRequest withRequest(openapisdk.models.shared.RestoreInstanceRequest request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesRestoreSecurity security;
    public FileProjectsLocationsInstancesRestoreRequest withSecurity(FileProjectsLocationsInstancesRestoreSecurity security) {
        this.security = security;
        return this;
    }
}
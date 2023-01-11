package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesRevertRequest {
    public FileProjectsLocationsInstancesRevertPathParams pathParams;
    public FileProjectsLocationsInstancesRevertRequest withPathParams(FileProjectsLocationsInstancesRevertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesRevertQueryParams queryParams;
    public FileProjectsLocationsInstancesRevertRequest withQueryParams(FileProjectsLocationsInstancesRevertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevertInstanceRequest request;
    public FileProjectsLocationsInstancesRevertRequest withRequest(openapisdk.models.shared.RevertInstanceRequest request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesRevertSecurity security;
    public FileProjectsLocationsInstancesRevertRequest withSecurity(FileProjectsLocationsInstancesRevertSecurity security) {
        this.security = security;
        return this;
    }
}
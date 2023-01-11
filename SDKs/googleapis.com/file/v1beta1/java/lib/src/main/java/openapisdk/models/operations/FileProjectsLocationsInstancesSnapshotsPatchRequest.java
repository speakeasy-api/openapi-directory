package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSnapshotsPatchRequest {
    public FileProjectsLocationsInstancesSnapshotsPatchPathParams pathParams;
    public FileProjectsLocationsInstancesSnapshotsPatchRequest withPathParams(FileProjectsLocationsInstancesSnapshotsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesSnapshotsPatchQueryParams queryParams;
    public FileProjectsLocationsInstancesSnapshotsPatchRequest withQueryParams(FileProjectsLocationsInstancesSnapshotsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnapshotInput request;
    public FileProjectsLocationsInstancesSnapshotsPatchRequest withRequest(openapisdk.models.shared.SnapshotInput request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesSnapshotsPatchSecurity security;
    public FileProjectsLocationsInstancesSnapshotsPatchRequest withSecurity(FileProjectsLocationsInstancesSnapshotsPatchSecurity security) {
        this.security = security;
        return this;
    }
}
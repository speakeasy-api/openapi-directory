package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSnapshotsCreateRequest {
    public FileProjectsLocationsInstancesSnapshotsCreatePathParams pathParams;
    public FileProjectsLocationsInstancesSnapshotsCreateRequest withPathParams(FileProjectsLocationsInstancesSnapshotsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesSnapshotsCreateQueryParams queryParams;
    public FileProjectsLocationsInstancesSnapshotsCreateRequest withQueryParams(FileProjectsLocationsInstancesSnapshotsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnapshotInput request;
    public FileProjectsLocationsInstancesSnapshotsCreateRequest withRequest(openapisdk.models.shared.SnapshotInput request) {
        this.request = request;
        return this;
    }
    public FileProjectsLocationsInstancesSnapshotsCreateSecurity security;
    public FileProjectsLocationsInstancesSnapshotsCreateRequest withSecurity(FileProjectsLocationsInstancesSnapshotsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
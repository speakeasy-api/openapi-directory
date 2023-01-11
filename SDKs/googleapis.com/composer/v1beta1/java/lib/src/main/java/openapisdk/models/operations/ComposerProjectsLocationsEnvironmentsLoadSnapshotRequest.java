package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest {
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest withPathParams(ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest withQueryParams(ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LoadSnapshotRequest request;
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest withRequest(openapisdk.models.shared.LoadSnapshotRequest request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity security;
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest withSecurity(ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity security) {
        this.security = security;
        return this;
    }
}
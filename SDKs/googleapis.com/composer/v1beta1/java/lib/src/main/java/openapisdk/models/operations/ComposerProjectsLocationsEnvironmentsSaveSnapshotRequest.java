package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest {
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest withPathParams(ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest withQueryParams(ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SaveSnapshotRequest request;
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest withRequest(openapisdk.models.shared.SaveSnapshotRequest request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity security;
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest withSecurity(ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest {
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest withPathParams(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest withQueryParams(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity security;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest withSecurity(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}
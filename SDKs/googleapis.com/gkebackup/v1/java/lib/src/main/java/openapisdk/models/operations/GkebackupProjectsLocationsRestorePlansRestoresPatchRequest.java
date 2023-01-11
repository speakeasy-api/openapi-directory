package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresPatchRequest {
    public GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchRequest withPathParams(GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresPatchQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchRequest withQueryParams(GkebackupProjectsLocationsRestorePlansRestoresPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreInput request;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchRequest withRequest(openapisdk.models.shared.RestoreInput request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity security;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchRequest withSecurity(GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity security) {
        this.security = security;
        return this;
    }
}
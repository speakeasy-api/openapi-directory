package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresCreateRequest {
    public GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansRestoresCreateRequest withPathParams(GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansRestoresCreateRequest withQueryParams(GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreInput request;
    public GkebackupProjectsLocationsRestorePlansRestoresCreateRequest withRequest(openapisdk.models.shared.RestoreInput request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity security;
    public GkebackupProjectsLocationsRestorePlansRestoresCreateRequest withSecurity(GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity security) {
        this.security = security;
        return this;
    }
}
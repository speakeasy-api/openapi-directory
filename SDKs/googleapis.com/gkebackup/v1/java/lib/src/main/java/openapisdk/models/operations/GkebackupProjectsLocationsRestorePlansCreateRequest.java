package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansCreateRequest {
    public GkebackupProjectsLocationsRestorePlansCreatePathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansCreateRequest withPathParams(GkebackupProjectsLocationsRestorePlansCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansCreateQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansCreateRequest withQueryParams(GkebackupProjectsLocationsRestorePlansCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestorePlanInput request;
    public GkebackupProjectsLocationsRestorePlansCreateRequest withRequest(openapisdk.models.shared.RestorePlanInput request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansCreateSecurity security;
    public GkebackupProjectsLocationsRestorePlansCreateRequest withSecurity(GkebackupProjectsLocationsRestorePlansCreateSecurity security) {
        this.security = security;
        return this;
    }
}
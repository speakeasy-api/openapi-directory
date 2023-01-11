package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest {
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams pathParams;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest withPathParams(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyQueryParams queryParams;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest withQueryParams(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity security;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest withSecurity(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}
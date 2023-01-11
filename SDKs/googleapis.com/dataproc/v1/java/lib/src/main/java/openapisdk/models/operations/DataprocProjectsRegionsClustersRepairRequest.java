package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersRepairRequest {
    public DataprocProjectsRegionsClustersRepairPathParams pathParams;
    public DataprocProjectsRegionsClustersRepairRequest withPathParams(DataprocProjectsRegionsClustersRepairPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersRepairQueryParams queryParams;
    public DataprocProjectsRegionsClustersRepairRequest withQueryParams(DataprocProjectsRegionsClustersRepairQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RepairClusterRequest request;
    public DataprocProjectsRegionsClustersRepairRequest withRequest(openapisdk.models.shared.RepairClusterRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersRepairSecurity security;
    public DataprocProjectsRegionsClustersRepairRequest withSecurity(DataprocProjectsRegionsClustersRepairSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest {
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams pathParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest withPathParams(BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams queryParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest withQueryParams(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeCapacityCommitmentsRequest request;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest withRequest(openapisdk.models.shared.MergeCapacityCommitmentsRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity security;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest withSecurity(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity security) {
        this.security = security;
        return this;
    }
}
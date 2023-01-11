package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest {
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams pathParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest withPathParams(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams queryParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest withQueryParams(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SplitCapacityCommitmentRequest request;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest withRequest(openapisdk.models.shared.SplitCapacityCommitmentRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity security;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest withSecurity(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity security) {
        this.security = security;
        return this;
    }
}
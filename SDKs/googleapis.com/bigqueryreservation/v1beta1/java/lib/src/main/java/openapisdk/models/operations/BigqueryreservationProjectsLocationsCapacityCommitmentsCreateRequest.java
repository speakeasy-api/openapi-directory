package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest {
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams pathParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest withPathParams(BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams queryParams;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest withQueryParams(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CapacityCommitmentInput request;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest withRequest(openapisdk.models.shared.CapacityCommitmentInput request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity security;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest withSecurity(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
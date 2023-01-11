package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest {
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams pathParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest withPathParams(BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams queryParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest withQueryParams(BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentInput request;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest withRequest(openapisdk.models.shared.AssignmentInput request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity security;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest withSecurity(BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest {
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams pathParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest withPathParams(BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams queryParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest withQueryParams(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveAssignmentRequest request;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest withRequest(openapisdk.models.shared.MoveAssignmentRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity security;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest withSecurity(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity security) {
        this.security = security;
        return this;
    }
}
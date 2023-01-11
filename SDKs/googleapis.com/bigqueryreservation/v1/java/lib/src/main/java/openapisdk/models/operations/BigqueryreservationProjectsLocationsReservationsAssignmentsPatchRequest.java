package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest {
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams pathParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest withPathParams(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams queryParams;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest withQueryParams(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentInput request;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest withRequest(openapisdk.models.shared.AssignmentInput request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity security;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest withSecurity(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsCreateRequest {
    public BigqueryreservationProjectsLocationsReservationsCreatePathParams pathParams;
    public BigqueryreservationProjectsLocationsReservationsCreateRequest withPathParams(BigqueryreservationProjectsLocationsReservationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsCreateQueryParams queryParams;
    public BigqueryreservationProjectsLocationsReservationsCreateRequest withQueryParams(BigqueryreservationProjectsLocationsReservationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReservationInput request;
    public BigqueryreservationProjectsLocationsReservationsCreateRequest withRequest(openapisdk.models.shared.ReservationInput request) {
        this.request = request;
        return this;
    }
    public BigqueryreservationProjectsLocationsReservationsCreateSecurity security;
    public BigqueryreservationProjectsLocationsReservationsCreateRequest withSecurity(BigqueryreservationProjectsLocationsReservationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
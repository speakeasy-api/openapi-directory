package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerReservationRequest {
    public String serverURL;
    public UpdateWorkerReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWorkerReservationPathParams pathParams;
    public UpdateWorkerReservationRequest withPathParams(UpdateWorkerReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkerReservationHeaders headers;
    public UpdateWorkerReservationRequest withHeaders(UpdateWorkerReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWorkerReservationUpdateWorkerReservationRequest request;
    public UpdateWorkerReservationRequest withRequest(UpdateWorkerReservationUpdateWorkerReservationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWorkerReservationSecurity security;
    public UpdateWorkerReservationRequest withSecurity(UpdateWorkerReservationSecurity security) {
        this.security = security;
        return this;
    }
}
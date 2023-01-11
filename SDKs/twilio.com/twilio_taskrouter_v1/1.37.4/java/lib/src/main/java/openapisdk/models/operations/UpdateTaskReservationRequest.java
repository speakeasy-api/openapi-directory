package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskReservationRequest {
    public String serverURL;
    public UpdateTaskReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTaskReservationPathParams pathParams;
    public UpdateTaskReservationRequest withPathParams(UpdateTaskReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTaskReservationHeaders headers;
    public UpdateTaskReservationRequest withHeaders(UpdateTaskReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTaskReservationUpdateTaskReservationRequest request;
    public UpdateTaskReservationRequest withRequest(UpdateTaskReservationUpdateTaskReservationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaskReservationSecurity security;
    public UpdateTaskReservationRequest withSecurity(UpdateTaskReservationSecurity security) {
        this.security = security;
        return this;
    }
}
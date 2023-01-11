package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOutgoingCallerIdRequest {
    public String serverURL;
    public UpdateOutgoingCallerIdRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateOutgoingCallerIdPathParams pathParams;
    public UpdateOutgoingCallerIdRequest withPathParams(UpdateOutgoingCallerIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest request;
    public UpdateOutgoingCallerIdRequest withRequest(UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest request) {
        this.request = request;
        return this;
    }
    public UpdateOutgoingCallerIdSecurity security;
    public UpdateOutgoingCallerIdRequest withSecurity(UpdateOutgoingCallerIdSecurity security) {
        this.security = security;
        return this;
    }
}
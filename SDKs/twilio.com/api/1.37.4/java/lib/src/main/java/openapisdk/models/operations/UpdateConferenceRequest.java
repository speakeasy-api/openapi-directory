package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConferenceRequest {
    public String serverURL;
    public UpdateConferenceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConferencePathParams pathParams;
    public UpdateConferenceRequest withPathParams(UpdateConferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConferenceUpdateConferenceRequest request;
    public UpdateConferenceRequest withRequest(UpdateConferenceUpdateConferenceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConferenceSecurity security;
    public UpdateConferenceRequest withSecurity(UpdateConferenceSecurity security) {
        this.security = security;
        return this;
    }
}
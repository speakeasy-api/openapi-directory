package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnnotationRequest {
    public String serverURL;
    public UpdateAnnotationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAnnotationPathParams pathParams;
    public UpdateAnnotationRequest withPathParams(UpdateAnnotationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAnnotationUpdateAnnotationRequest request;
    public UpdateAnnotationRequest withRequest(UpdateAnnotationUpdateAnnotationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAnnotationSecurity security;
    public UpdateAnnotationRequest withSecurity(UpdateAnnotationSecurity security) {
        this.security = security;
        return this;
    }
}
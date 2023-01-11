package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductEntityAssignmentRequest {
    public String serverURL;
    public CreateTrustProductEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTrustProductEntityAssignmentPathParams pathParams;
    public CreateTrustProductEntityAssignmentRequest withPathParams(CreateTrustProductEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest request;
    public CreateTrustProductEntityAssignmentRequest withRequest(CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest request) {
        this.request = request;
        return this;
    }
    public CreateTrustProductEntityAssignmentSecurity security;
    public CreateTrustProductEntityAssignmentRequest withSecurity(CreateTrustProductEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}
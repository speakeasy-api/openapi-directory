package openapisdk.models.operations;



public class GetUploadAttemptRequest {
    public GetUploadAttemptPathParams pathParams;
    public GetUploadAttemptRequest withPathParams(GetUploadAttemptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUploadAttemptSecurity security;
    public GetUploadAttemptRequest withSecurity(GetUploadAttemptSecurity security) {
        this.security = security;
        return this;
    }
}
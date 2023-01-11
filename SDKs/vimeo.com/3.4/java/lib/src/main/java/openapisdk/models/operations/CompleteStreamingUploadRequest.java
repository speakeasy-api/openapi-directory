package openapisdk.models.operations;



public class CompleteStreamingUploadRequest {
    public CompleteStreamingUploadPathParams pathParams;
    public CompleteStreamingUploadRequest withPathParams(CompleteStreamingUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompleteStreamingUploadQueryParams queryParams;
    public CompleteStreamingUploadRequest withQueryParams(CompleteStreamingUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompleteStreamingUploadSecurity security;
    public CompleteStreamingUploadRequest withSecurity(CompleteStreamingUploadSecurity security) {
        this.security = security;
        return this;
    }
}
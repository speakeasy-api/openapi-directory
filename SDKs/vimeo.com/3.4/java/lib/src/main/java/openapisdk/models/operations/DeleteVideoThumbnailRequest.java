package openapisdk.models.operations;



public class DeleteVideoThumbnailRequest {
    public DeleteVideoThumbnailPathParams pathParams;
    public DeleteVideoThumbnailRequest withPathParams(DeleteVideoThumbnailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoThumbnailSecurity security;
    public DeleteVideoThumbnailRequest withSecurity(DeleteVideoThumbnailSecurity security) {
        this.security = security;
        return this;
    }
}
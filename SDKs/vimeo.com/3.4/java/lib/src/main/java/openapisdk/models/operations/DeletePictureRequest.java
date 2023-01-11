package openapisdk.models.operations;



public class DeletePictureRequest {
    public DeletePicturePathParams pathParams;
    public DeletePictureRequest withPathParams(DeletePicturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePictureSecurity security;
    public DeletePictureRequest withSecurity(DeletePictureSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;



public class CreatePictureRequest {
    public CreatePicturePathParams pathParams;
    public CreatePictureRequest withPathParams(CreatePicturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePictureSecurity security;
    public CreatePictureRequest withSecurity(CreatePictureSecurity security) {
        this.security = security;
        return this;
    }
}
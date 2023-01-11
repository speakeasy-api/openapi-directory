package openapisdk.models.operations;



public class DeleteModelRequest {
    public DeleteModelPathParams pathParams;
    public DeleteModelRequest withPathParams(DeleteModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteModelSecurity security;
    public DeleteModelRequest withSecurity(DeleteModelSecurity security) {
        this.security = security;
        return this;
    }
}
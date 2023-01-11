package openapisdk.models.operations;



public class AddVideoTagRequest {
    public AddVideoTagPathParams pathParams;
    public AddVideoTagRequest withPathParams(AddVideoTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoTagSecurity security;
    public AddVideoTagRequest withSecurity(AddVideoTagSecurity security) {
        this.security = security;
        return this;
    }
}
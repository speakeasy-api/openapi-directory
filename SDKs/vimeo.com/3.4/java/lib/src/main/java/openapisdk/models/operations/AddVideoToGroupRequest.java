package openapisdk.models.operations;



public class AddVideoToGroupRequest {
    public AddVideoToGroupPathParams pathParams;
    public AddVideoToGroupRequest withPathParams(AddVideoToGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoToGroupSecurity security;
    public AddVideoToGroupRequest withSecurity(AddVideoToGroupSecurity security) {
        this.security = security;
        return this;
    }
}
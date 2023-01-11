package openapisdk.models.operations;



public class GetAllCustomFieldsByCategoryRequest {
    public GetAllCustomFieldsByCategoryPathParams pathParams;
    public GetAllCustomFieldsByCategoryRequest withPathParams(GetAllCustomFieldsByCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllCustomFieldsByCategorySecurity security;
    public GetAllCustomFieldsByCategoryRequest withSecurity(GetAllCustomFieldsByCategorySecurity security) {
        this.security = security;
        return this;
    }
}
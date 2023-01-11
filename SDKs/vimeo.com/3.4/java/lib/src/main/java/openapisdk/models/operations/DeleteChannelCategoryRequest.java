package openapisdk.models.operations;



public class DeleteChannelCategoryRequest {
    public DeleteChannelCategoryPathParams pathParams;
    public DeleteChannelCategoryRequest withPathParams(DeleteChannelCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteChannelCategorySecurity security;
    public DeleteChannelCategoryRequest withSecurity(DeleteChannelCategorySecurity security) {
        this.security = security;
        return this;
    }
}
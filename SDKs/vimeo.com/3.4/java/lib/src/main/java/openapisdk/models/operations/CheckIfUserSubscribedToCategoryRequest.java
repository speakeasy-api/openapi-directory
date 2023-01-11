package openapisdk.models.operations;



public class CheckIfUserSubscribedToCategoryRequest {
    public CheckIfUserSubscribedToCategoryPathParams pathParams;
    public CheckIfUserSubscribedToCategoryRequest withPathParams(CheckIfUserSubscribedToCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CheckIfUserSubscribedToCategorySecurity security;
    public CheckIfUserSubscribedToCategoryRequest withSecurity(CheckIfUserSubscribedToCategorySecurity security) {
        this.security = security;
        return this;
    }
}
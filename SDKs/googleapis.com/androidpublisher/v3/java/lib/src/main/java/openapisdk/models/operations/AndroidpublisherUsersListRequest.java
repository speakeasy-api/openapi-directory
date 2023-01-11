package openapisdk.models.operations;



public class AndroidpublisherUsersListRequest {
    public AndroidpublisherUsersListPathParams pathParams;
    public AndroidpublisherUsersListRequest withPathParams(AndroidpublisherUsersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherUsersListQueryParams queryParams;
    public AndroidpublisherUsersListRequest withQueryParams(AndroidpublisherUsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AndroidpublisherUsersListSecurity security;
    public AndroidpublisherUsersListRequest withSecurity(AndroidpublisherUsersListSecurity security) {
        this.security = security;
        return this;
    }
}
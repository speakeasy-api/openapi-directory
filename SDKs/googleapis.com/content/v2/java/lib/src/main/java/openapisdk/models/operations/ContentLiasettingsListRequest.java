package openapisdk.models.operations;



public class ContentLiasettingsListRequest {
    public ContentLiasettingsListPathParams pathParams;
    public ContentLiasettingsListRequest withPathParams(ContentLiasettingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentLiasettingsListQueryParams queryParams;
    public ContentLiasettingsListRequest withQueryParams(ContentLiasettingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentLiasettingsListSecurity security;
    public ContentLiasettingsListRequest withSecurity(ContentLiasettingsListSecurity security) {
        this.security = security;
        return this;
    }
}
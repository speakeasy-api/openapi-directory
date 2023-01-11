package openapisdk.models.operations;



public class ContentShippingsettingsListRequest {
    public ContentShippingsettingsListPathParams pathParams;
    public ContentShippingsettingsListRequest withPathParams(ContentShippingsettingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentShippingsettingsListQueryParams queryParams;
    public ContentShippingsettingsListRequest withQueryParams(ContentShippingsettingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentShippingsettingsListSecurity security;
    public ContentShippingsettingsListRequest withSecurity(ContentShippingsettingsListSecurity security) {
        this.security = security;
        return this;
    }
}
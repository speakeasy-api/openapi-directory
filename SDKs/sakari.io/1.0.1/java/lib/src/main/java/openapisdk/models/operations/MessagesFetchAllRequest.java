package openapisdk.models.operations;



public class MessagesFetchAllRequest {
    public MessagesFetchAllPathParams pathParams;
    public MessagesFetchAllRequest withPathParams(MessagesFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesFetchAllQueryParams queryParams;
    public MessagesFetchAllRequest withQueryParams(MessagesFetchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesFetchAllSecurity security;
    public MessagesFetchAllRequest withSecurity(MessagesFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;



public class ConversationsFetchAllRequest {
    public ConversationsFetchAllPathParams pathParams;
    public ConversationsFetchAllRequest withPathParams(ConversationsFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConversationsFetchAllQueryParams queryParams;
    public ConversationsFetchAllRequest withQueryParams(ConversationsFetchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConversationsFetchAllSecurity security;
    public ConversationsFetchAllRequest withSecurity(ConversationsFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}
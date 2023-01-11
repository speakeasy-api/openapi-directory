package openapisdk.models.operations;



public class ConversationsFetchRequest {
    public ConversationsFetchPathParams pathParams;
    public ConversationsFetchRequest withPathParams(ConversationsFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConversationsFetchSecurity security;
    public ConversationsFetchRequest withSecurity(ConversationsFetchSecurity security) {
        this.security = security;
        return this;
    }
}
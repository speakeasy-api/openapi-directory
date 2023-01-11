package openapisdk.models.operations;



public class ConversationsCloseRequest {
    public ConversationsClosePathParams pathParams;
    public ConversationsCloseRequest withPathParams(ConversationsClosePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConversationsCloseSecurity security;
    public ConversationsCloseRequest withSecurity(ConversationsCloseSecurity security) {
        this.security = security;
        return this;
    }
}
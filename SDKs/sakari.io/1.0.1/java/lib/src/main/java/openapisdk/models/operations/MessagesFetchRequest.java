package openapisdk.models.operations;



public class MessagesFetchRequest {
    public MessagesFetchPathParams pathParams;
    public MessagesFetchRequest withPathParams(MessagesFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesFetchSecurity security;
    public MessagesFetchRequest withSecurity(MessagesFetchSecurity security) {
        this.security = security;
        return this;
    }
}
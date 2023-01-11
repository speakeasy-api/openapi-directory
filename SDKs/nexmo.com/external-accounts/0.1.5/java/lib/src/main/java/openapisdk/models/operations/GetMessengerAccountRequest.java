package openapisdk.models.operations;



public class GetMessengerAccountRequest {
    public GetMessengerAccountPathParams pathParams;
    public GetMessengerAccountRequest withPathParams(GetMessengerAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMessengerAccountSecurity security;
    public GetMessengerAccountRequest withSecurity(GetMessengerAccountSecurity security) {
        this.security = security;
        return this;
    }
}
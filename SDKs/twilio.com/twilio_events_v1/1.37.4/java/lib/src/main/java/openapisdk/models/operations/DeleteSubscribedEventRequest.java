package openapisdk.models.operations;



public class DeleteSubscribedEventRequest {
    public String serverURL;
    public DeleteSubscribedEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSubscribedEventPathParams pathParams;
    public DeleteSubscribedEventRequest withPathParams(DeleteSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSubscribedEventSecurity security;
    public DeleteSubscribedEventRequest withSecurity(DeleteSubscribedEventSecurity security) {
        this.security = security;
        return this;
    }
}
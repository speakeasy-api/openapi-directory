package openapisdk.models.operations;



public class FetchSubscribedEventRequest {
    public String serverURL;
    public FetchSubscribedEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSubscribedEventPathParams pathParams;
    public FetchSubscribedEventRequest withPathParams(FetchSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSubscribedEventSecurity security;
    public FetchSubscribedEventRequest withSecurity(FetchSubscribedEventSecurity security) {
        this.security = security;
        return this;
    }
}
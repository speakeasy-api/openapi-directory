package openapisdk.models.operations;



public class ListConferenceRequest {
    public String serverURL;
    public ListConferenceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConferenceQueryParams queryParams;
    public ListConferenceRequest withQueryParams(ListConferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConferenceSecurity security;
    public ListConferenceRequest withSecurity(ListConferenceSecurity security) {
        this.security = security;
        return this;
    }
}
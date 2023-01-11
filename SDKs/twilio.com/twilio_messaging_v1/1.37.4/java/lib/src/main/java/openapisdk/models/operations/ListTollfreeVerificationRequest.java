package openapisdk.models.operations;



public class ListTollfreeVerificationRequest {
    public String serverURL;
    public ListTollfreeVerificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTollfreeVerificationQueryParams queryParams;
    public ListTollfreeVerificationRequest withQueryParams(ListTollfreeVerificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTollfreeVerificationSecurity security;
    public ListTollfreeVerificationRequest withSecurity(ListTollfreeVerificationSecurity security) {
        this.security = security;
        return this;
    }
}
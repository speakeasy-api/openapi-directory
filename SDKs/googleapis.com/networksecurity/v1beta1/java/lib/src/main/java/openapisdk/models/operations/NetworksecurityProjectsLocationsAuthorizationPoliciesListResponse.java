package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizationPoliciesResponse listAuthorizationPoliciesResponse;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse withListAuthorizationPoliciesResponse(openapisdk.models.shared.ListAuthorizationPoliciesResponse listAuthorizationPoliciesResponse) {
        this.listAuthorizationPoliciesResponse = listAuthorizationPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
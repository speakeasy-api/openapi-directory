package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsServerTlsPoliciesListResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsServerTlsPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServerTlsPoliciesResponse listServerTlsPoliciesResponse;
    public NetworksecurityProjectsLocationsServerTlsPoliciesListResponse withListServerTlsPoliciesResponse(openapisdk.models.shared.ListServerTlsPoliciesResponse listServerTlsPoliciesResponse) {
        this.listServerTlsPoliciesResponse = listServerTlsPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsServerTlsPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
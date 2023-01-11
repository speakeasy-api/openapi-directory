package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsClientTlsPoliciesListResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsClientTlsPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientTlsPoliciesResponse listClientTlsPoliciesResponse;
    public NetworksecurityProjectsLocationsClientTlsPoliciesListResponse withListClientTlsPoliciesResponse(openapisdk.models.shared.ListClientTlsPoliciesResponse listClientTlsPoliciesResponse) {
        this.listClientTlsPoliciesResponse = listClientTlsPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsClientTlsPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
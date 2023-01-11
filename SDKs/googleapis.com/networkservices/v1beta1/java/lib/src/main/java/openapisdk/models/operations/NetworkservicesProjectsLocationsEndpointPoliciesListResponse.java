package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsEndpointPoliciesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsEndpointPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEndpointPoliciesResponse listEndpointPoliciesResponse;
    public NetworkservicesProjectsLocationsEndpointPoliciesListResponse withListEndpointPoliciesResponse(openapisdk.models.shared.ListEndpointPoliciesResponse listEndpointPoliciesResponse) {
        this.listEndpointPoliciesResponse = listEndpointPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsEndpointPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
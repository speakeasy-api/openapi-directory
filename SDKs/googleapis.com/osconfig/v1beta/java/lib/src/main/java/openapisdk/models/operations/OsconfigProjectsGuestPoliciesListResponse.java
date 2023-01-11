package openapisdk.models.operations;



public class OsconfigProjectsGuestPoliciesListResponse {
    public String contentType;
    public OsconfigProjectsGuestPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGuestPoliciesResponse listGuestPoliciesResponse;
    public OsconfigProjectsGuestPoliciesListResponse withListGuestPoliciesResponse(openapisdk.models.shared.ListGuestPoliciesResponse listGuestPoliciesResponse) {
        this.listGuestPoliciesResponse = listGuestPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsGuestPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
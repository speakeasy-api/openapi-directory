package openapisdk.models.operations;



public class IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse {
    public String contentType;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkloadIdentityPoolProvidersResponse listWorkloadIdentityPoolProvidersResponse;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse withListWorkloadIdentityPoolProvidersResponse(openapisdk.models.shared.ListWorkloadIdentityPoolProvidersResponse listWorkloadIdentityPoolProvidersResponse) {
        this.listWorkloadIdentityPoolProvidersResponse = listWorkloadIdentityPoolProvidersResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class IamProjectsLocationsWorkloadIdentityPoolsListResponse {
    public String contentType;
    public IamProjectsLocationsWorkloadIdentityPoolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkloadIdentityPoolsResponse listWorkloadIdentityPoolsResponse;
    public IamProjectsLocationsWorkloadIdentityPoolsListResponse withListWorkloadIdentityPoolsResponse(openapisdk.models.shared.ListWorkloadIdentityPoolsResponse listWorkloadIdentityPoolsResponse) {
        this.listWorkloadIdentityPoolsResponse = listWorkloadIdentityPoolsResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsLocationsWorkloadIdentityPoolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
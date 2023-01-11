package openapisdk.models.operations;



public class CloudidentityGroupsListResponse {
    public String contentType;
    public CloudidentityGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public CloudidentityGroupsListResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
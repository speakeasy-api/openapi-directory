package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsListResponse {
    public String contentType;
    public CloudidentityInboundSsoAssignmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInboundSsoAssignmentsResponse listInboundSsoAssignmentsResponse;
    public CloudidentityInboundSsoAssignmentsListResponse withListInboundSsoAssignmentsResponse(openapisdk.models.shared.ListInboundSsoAssignmentsResponse listInboundSsoAssignmentsResponse) {
        this.listInboundSsoAssignmentsResponse = listInboundSsoAssignmentsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSsoAssignmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
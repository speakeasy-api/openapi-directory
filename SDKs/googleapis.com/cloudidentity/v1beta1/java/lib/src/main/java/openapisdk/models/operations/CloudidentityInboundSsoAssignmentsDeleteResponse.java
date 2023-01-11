package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsDeleteResponse {
    public String contentType;
    public CloudidentityInboundSsoAssignmentsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudidentityInboundSsoAssignmentsDeleteResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSsoAssignmentsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
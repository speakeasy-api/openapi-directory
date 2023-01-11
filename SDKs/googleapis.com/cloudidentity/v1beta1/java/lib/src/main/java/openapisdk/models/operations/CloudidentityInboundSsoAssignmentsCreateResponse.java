package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsCreateResponse {
    public String contentType;
    public CloudidentityInboundSsoAssignmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudidentityInboundSsoAssignmentsCreateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSsoAssignmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
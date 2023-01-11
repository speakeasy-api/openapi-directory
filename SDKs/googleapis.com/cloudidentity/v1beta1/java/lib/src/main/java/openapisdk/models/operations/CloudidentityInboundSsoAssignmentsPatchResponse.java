package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsPatchResponse {
    public String contentType;
    public CloudidentityInboundSsoAssignmentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudidentityInboundSsoAssignmentsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSsoAssignmentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
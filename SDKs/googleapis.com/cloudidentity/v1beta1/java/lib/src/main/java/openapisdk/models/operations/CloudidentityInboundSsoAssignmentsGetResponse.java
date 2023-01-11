package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsGetResponse {
    public String contentType;
    public CloudidentityInboundSsoAssignmentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InboundSsoAssignment inboundSsoAssignment;
    public CloudidentityInboundSsoAssignmentsGetResponse withInboundSsoAssignment(openapisdk.models.shared.InboundSsoAssignment inboundSsoAssignment) {
        this.inboundSsoAssignment = inboundSsoAssignment;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSsoAssignmentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
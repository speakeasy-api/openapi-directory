package openapisdk.models.operations;



public class CloudidentityCustomersUserinvitationsSendResponse {
    public String contentType;
    public CloudidentityCustomersUserinvitationsSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudidentityCustomersUserinvitationsSendResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudidentityCustomersUserinvitationsSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
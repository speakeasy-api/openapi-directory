package openapisdk.models.operations;



public class CreateContactResponse {
    public openapisdk.models.shared.ContactResult contactResult;
    public CreateContactResponse withContactResult(openapisdk.models.shared.ContactResult contactResult) {
        this.contactResult = contactResult;
        return this;
    }
    public String contentType;
    public CreateContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
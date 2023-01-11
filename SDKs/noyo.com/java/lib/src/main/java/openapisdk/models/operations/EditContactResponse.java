package openapisdk.models.operations;



public class EditContactResponse {
    public openapisdk.models.shared.ContactResult contactResult;
    public EditContactResponse withContactResult(openapisdk.models.shared.ContactResult contactResult) {
        this.contactResult = contactResult;
        return this;
    }
    public String contentType;
    public EditContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
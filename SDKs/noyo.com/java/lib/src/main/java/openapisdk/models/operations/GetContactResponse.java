package openapisdk.models.operations;



public class GetContactResponse {
    public openapisdk.models.shared.ContactResult contactResult;
    public GetContactResponse withContactResult(openapisdk.models.shared.ContactResult contactResult) {
        this.contactResult = contactResult;
        return this;
    }
    public String contentType;
    public GetContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
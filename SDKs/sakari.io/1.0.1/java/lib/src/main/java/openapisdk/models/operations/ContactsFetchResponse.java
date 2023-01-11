package openapisdk.models.operations;



public class ContactsFetchResponse {
    public openapisdk.models.shared.ContactResponse contactResponse;
    public ContactsFetchResponse withContactResponse(openapisdk.models.shared.ContactResponse contactResponse) {
        this.contactResponse = contactResponse;
        return this;
    }
    public String contentType;
    public ContactsFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
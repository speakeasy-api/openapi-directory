package openapisdk.models.operations;



public class ContactsUpdateResponse {
    public openapisdk.models.shared.ContactResponse contactResponse;
    public ContactsUpdateResponse withContactResponse(openapisdk.models.shared.ContactResponse contactResponse) {
        this.contactResponse = contactResponse;
        return this;
    }
    public String contentType;
    public ContactsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
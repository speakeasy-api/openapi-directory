package openapisdk.models.operations;



public class ContactsFetchAllResponse {
    public openapisdk.models.shared.ContactsResponse contactsResponse;
    public ContactsFetchAllResponse withContactsResponse(openapisdk.models.shared.ContactsResponse contactsResponse) {
        this.contactsResponse = contactsResponse;
        return this;
    }
    public String contentType;
    public ContactsFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ContactsFetchAllResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ContactsFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class ContactsCreateResponse {
    public String contentType;
    public ContactsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object contactsCreate201ApplicationJSONOneOf;
    public ContactsCreateResponse withContactsCreate201ApplicationJsonOneOf(Object contactsCreate201ApplicationJSONOneOf) {
        this.contactsCreate201ApplicationJSONOneOf = contactsCreate201ApplicationJSONOneOf;
        return this;
    }
}
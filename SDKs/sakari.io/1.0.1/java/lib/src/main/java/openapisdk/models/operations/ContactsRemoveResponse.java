package openapisdk.models.operations;



public class ContactsRemoveResponse {
    public String contentType;
    public ContactsRemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsRemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ContactsRemove200ApplicationJson contactsRemove200ApplicationJSONObject;
    public ContactsRemoveResponse withContactsRemove200ApplicationJsonObject(ContactsRemove200ApplicationJson contactsRemove200ApplicationJSONObject) {
        this.contactsRemove200ApplicationJSONObject = contactsRemove200ApplicationJSONObject;
        return this;
    }
}
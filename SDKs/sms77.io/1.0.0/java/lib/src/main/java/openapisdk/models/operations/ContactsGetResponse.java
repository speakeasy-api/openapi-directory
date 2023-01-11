package openapisdk.models.operations;



public class ContactsGetResponse {
    public String contactsGet200ApplicationJSONString;
    public ContactsGetResponse withContactsGet200ApplicationJsonString(String contactsGet200ApplicationJSONString) {
        this.contactsGet200ApplicationJSONString = contactsGet200ApplicationJSONString;
        return this;
    }
    public String contactsGet200TextCsvString;
    public ContactsGetResponse withContactsGet200TextCsvString(String contactsGet200TextCsvString) {
        this.contactsGet200TextCsvString = contactsGet200TextCsvString;
        return this;
    }
    public String contentType;
    public ContactsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class ContactsPostResponse {
    public String contactsPOST200ApplicationJSONString;
    public ContactsPostResponse withContactsPost200ApplicationJsonString(String contactsPOST200ApplicationJSONString) {
        this.contactsPOST200ApplicationJSONString = contactsPOST200ApplicationJSONString;
        return this;
    }
    public String contactsPOST200TextPlainString;
    public ContactsPostResponse withContactsPost200TextPlainString(String contactsPOST200TextPlainString) {
        this.contactsPOST200TextPlainString = contactsPOST200TextPlainString;
        return this;
    }
    public String contentType;
    public ContactsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContactsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.shared;



/**
 * ContactsListResponse
 * A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
**/
public class ContactsListResponse {
    public Contact[] items;
    public ContactsListResponse withItems(Contact[] items) {
        this.items = items;
        return this;
    }
    public String kind;
    public ContactsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}
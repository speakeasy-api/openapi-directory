package openapisdk.models.operations;



public class ContactsCreateRequest {
    public ContactsCreatePathParams pathParams;
    public ContactsCreateRequest withPathParams(ContactsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsCreateQueryParams queryParams;
    public ContactsCreateRequest withQueryParams(ContactsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsCreateRequests request;
    public ContactsCreateRequest withRequest(ContactsCreateRequests request) {
        this.request = request;
        return this;
    }
    public ContactsCreateSecurity security;
    public ContactsCreateRequest withSecurity(ContactsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
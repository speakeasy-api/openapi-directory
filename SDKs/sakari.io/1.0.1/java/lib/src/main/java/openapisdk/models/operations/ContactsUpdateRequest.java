package openapisdk.models.operations;



public class ContactsUpdateRequest {
    public ContactsUpdatePathParams pathParams;
    public ContactsUpdateRequest withPathParams(ContactsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsUpdateSecurity security;
    public ContactsUpdateRequest withSecurity(ContactsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}
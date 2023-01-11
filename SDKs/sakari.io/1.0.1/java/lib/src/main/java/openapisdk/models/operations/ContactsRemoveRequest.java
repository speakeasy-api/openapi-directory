package openapisdk.models.operations;



public class ContactsRemoveRequest {
    public ContactsRemovePathParams pathParams;
    public ContactsRemoveRequest withPathParams(ContactsRemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsRemoveSecurity security;
    public ContactsRemoveRequest withSecurity(ContactsRemoveSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;



public class ContactsFetchRequest {
    public ContactsFetchPathParams pathParams;
    public ContactsFetchRequest withPathParams(ContactsFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsFetchSecurity security;
    public ContactsFetchRequest withSecurity(ContactsFetchSecurity security) {
        this.security = security;
        return this;
    }
}
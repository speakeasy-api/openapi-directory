package openapisdk.models.operations;



public class ContactsFetchAllRequest {
    public ContactsFetchAllPathParams pathParams;
    public ContactsFetchAllRequest withPathParams(ContactsFetchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsFetchAllQueryParams queryParams;
    public ContactsFetchAllRequest withQueryParams(ContactsFetchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsFetchAllSecurity security;
    public ContactsFetchAllRequest withSecurity(ContactsFetchAllSecurity security) {
        this.security = security;
        return this;
    }
}
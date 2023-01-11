package openapisdk.models.operations;



public class OsloginUsersSshPublicKeysGetRequest {
    public OsloginUsersSshPublicKeysGetPathParams pathParams;
    public OsloginUsersSshPublicKeysGetRequest withPathParams(OsloginUsersSshPublicKeysGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsloginUsersSshPublicKeysGetQueryParams queryParams;
    public OsloginUsersSshPublicKeysGetRequest withQueryParams(OsloginUsersSshPublicKeysGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsloginUsersSshPublicKeysGetSecurity security;
    public OsloginUsersSshPublicKeysGetRequest withSecurity(OsloginUsersSshPublicKeysGetSecurity security) {
        this.security = security;
        return this;
    }
}
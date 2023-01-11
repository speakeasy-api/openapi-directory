package openapisdk.models.operations;



public class FirebasemlOperationsDeleteRequest {
    public FirebasemlOperationsDeletePathParams pathParams;
    public FirebasemlOperationsDeleteRequest withPathParams(FirebasemlOperationsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasemlOperationsDeleteQueryParams queryParams;
    public FirebasemlOperationsDeleteRequest withQueryParams(FirebasemlOperationsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebasemlOperationsDeleteSecurity security;
    public FirebasemlOperationsDeleteRequest withSecurity(FirebasemlOperationsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}
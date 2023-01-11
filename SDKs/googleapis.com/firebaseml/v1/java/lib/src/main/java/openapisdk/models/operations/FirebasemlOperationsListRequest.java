package openapisdk.models.operations;



public class FirebasemlOperationsListRequest {
    public FirebasemlOperationsListPathParams pathParams;
    public FirebasemlOperationsListRequest withPathParams(FirebasemlOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasemlOperationsListQueryParams queryParams;
    public FirebasemlOperationsListRequest withQueryParams(FirebasemlOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebasemlOperationsListSecurity security;
    public FirebasemlOperationsListRequest withSecurity(FirebasemlOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}
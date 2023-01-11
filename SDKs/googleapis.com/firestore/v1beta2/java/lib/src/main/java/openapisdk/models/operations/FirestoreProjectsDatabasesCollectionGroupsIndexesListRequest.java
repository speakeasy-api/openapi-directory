package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest {
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams pathParams;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest withPathParams(FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams queryParams;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest withQueryParams(FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity security;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest withSecurity(FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity security) {
        this.security = security;
        return this;
    }
}
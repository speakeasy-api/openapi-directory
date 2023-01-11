package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest {
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams pathParams;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest withPathParams(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams queryParams;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest withQueryParams(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2Field request;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest withRequest(openapisdk.models.shared.GoogleFirestoreAdminV1beta2Field request) {
        this.request = request;
        return this;
    }
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity security;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest withSecurity(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity security) {
        this.security = security;
        return this;
    }
}
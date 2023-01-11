package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesImportDocumentsRequest {
    public FirestoreProjectsDatabasesImportDocumentsPathParams pathParams;
    public FirestoreProjectsDatabasesImportDocumentsRequest withPathParams(FirestoreProjectsDatabasesImportDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirestoreProjectsDatabasesImportDocumentsQueryParams queryParams;
    public FirestoreProjectsDatabasesImportDocumentsRequest withQueryParams(FirestoreProjectsDatabasesImportDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2ImportDocumentsRequest request;
    public FirestoreProjectsDatabasesImportDocumentsRequest withRequest(openapisdk.models.shared.GoogleFirestoreAdminV1beta2ImportDocumentsRequest request) {
        this.request = request;
        return this;
    }
    public FirestoreProjectsDatabasesImportDocumentsSecurity security;
    public FirestoreProjectsDatabasesImportDocumentsRequest withSecurity(FirestoreProjectsDatabasesImportDocumentsSecurity security) {
        this.security = security;
        return this;
    }
}
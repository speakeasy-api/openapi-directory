package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesExportDocumentsRequest {
    public FirestoreProjectsDatabasesExportDocumentsPathParams pathParams;
    public FirestoreProjectsDatabasesExportDocumentsRequest withPathParams(FirestoreProjectsDatabasesExportDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirestoreProjectsDatabasesExportDocumentsQueryParams queryParams;
    public FirestoreProjectsDatabasesExportDocumentsRequest withQueryParams(FirestoreProjectsDatabasesExportDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2ExportDocumentsRequest request;
    public FirestoreProjectsDatabasesExportDocumentsRequest withRequest(openapisdk.models.shared.GoogleFirestoreAdminV1beta2ExportDocumentsRequest request) {
        this.request = request;
        return this;
    }
    public FirestoreProjectsDatabasesExportDocumentsSecurity security;
    public FirestoreProjectsDatabasesExportDocumentsRequest withSecurity(FirestoreProjectsDatabasesExportDocumentsSecurity security) {
        this.security = security;
        return this;
    }
}
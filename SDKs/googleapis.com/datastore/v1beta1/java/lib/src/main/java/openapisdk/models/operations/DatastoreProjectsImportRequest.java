package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsImportRequest {
    public DatastoreProjectsImportPathParams pathParams;
    public DatastoreProjectsImportRequest withPathParams(DatastoreProjectsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastoreProjectsImportQueryParams queryParams;
    public DatastoreProjectsImportRequest withQueryParams(DatastoreProjectsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleDatastoreAdminV1beta1ImportEntitiesRequest request;
    public DatastoreProjectsImportRequest withRequest(openapisdk.models.shared.GoogleDatastoreAdminV1beta1ImportEntitiesRequest request) {
        this.request = request;
        return this;
    }
    public DatastoreProjectsImportSecurity security;
    public DatastoreProjectsImportRequest withSecurity(DatastoreProjectsImportSecurity security) {
        this.security = security;
        return this;
    }
}
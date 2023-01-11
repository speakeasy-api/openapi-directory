package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsExportRequest {
    public DatastoreProjectsExportPathParams pathParams;
    public DatastoreProjectsExportRequest withPathParams(DatastoreProjectsExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastoreProjectsExportQueryParams queryParams;
    public DatastoreProjectsExportRequest withQueryParams(DatastoreProjectsExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest request;
    public DatastoreProjectsExportRequest withRequest(openapisdk.models.shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest request) {
        this.request = request;
        return this;
    }
    public DatastoreProjectsExportSecurity security;
    public DatastoreProjectsExportRequest withSecurity(DatastoreProjectsExportSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportLibraryV2Request {
    public ImportLibraryV2PathParams pathParams;
    public ImportLibraryV2Request withPathParams(ImportLibraryV2PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkImportRequest request;
    public ImportLibraryV2Request withRequest(openapisdk.models.shared.BulkImportRequest request) {
        this.request = request;
        return this;
    }
    public ImportLibraryV2Security security;
    public ImportLibraryV2Request withSecurity(ImportLibraryV2Security security) {
        this.security = security;
        return this;
    }
}
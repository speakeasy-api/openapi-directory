package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FullImportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportExport request;
    public FullImportRequest withRequest(openapisdk.models.shared.ImportExport request) {
        this.request = request;
        return this;
    }
    public FullImportSecurity security;
    public FullImportRequest withSecurity(FullImportSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FullImportFromFileRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportExport request;
    public FullImportFromFileRequest withRequest(openapisdk.models.shared.ImportExport request) {
        this.request = request;
        return this;
    }
    public FullImportFromFileSecurity security;
    public FullImportFromFileRequest withSecurity(FullImportFromFileSecurity security) {
        this.security = security;
        return this;
    }
}
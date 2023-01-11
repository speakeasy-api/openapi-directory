package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBulkDataExporterConfigsRequest {
    @SpeakeasyMetadata("request:mediaType=application/ndjson")
    public openapisdk.models.shared.DataExporterConfig request;
    public CreateBulkDataExporterConfigsRequest withRequest(openapisdk.models.shared.DataExporterConfig request) {
        this.request = request;
        return this;
    }
    public CreateBulkDataExporterConfigsSecurity security;
    public CreateBulkDataExporterConfigsRequest withSecurity(CreateBulkDataExporterConfigsSecurity security) {
        this.security = security;
        return this;
    }
}
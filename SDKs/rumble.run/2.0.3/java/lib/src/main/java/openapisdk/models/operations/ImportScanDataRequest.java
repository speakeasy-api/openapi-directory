package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportScanDataRequest {
    public ImportScanDataPathParams pathParams;
    public ImportScanDataRequest withPathParams(ImportScanDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ImportScanDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public ImportScanDataSecurity security;
    public ImportScanDataRequest withSecurity(ImportScanDataSecurity security) {
        this.security = security;
        return this;
    }
}
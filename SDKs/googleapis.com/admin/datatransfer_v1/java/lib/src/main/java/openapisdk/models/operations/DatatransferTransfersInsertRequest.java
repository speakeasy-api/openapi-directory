package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferTransfersInsertRequest {
    public DatatransferTransfersInsertQueryParams queryParams;
    public DatatransferTransfersInsertRequest withQueryParams(DatatransferTransfersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataTransfer request;
    public DatatransferTransfersInsertRequest withRequest(openapisdk.models.shared.DataTransfer request) {
        this.request = request;
        return this;
    }
    public DatatransferTransfersInsertSecurity security;
    public DatatransferTransfersInsertRequest withSecurity(DatatransferTransfersInsertSecurity security) {
        this.security = security;
        return this;
    }
}
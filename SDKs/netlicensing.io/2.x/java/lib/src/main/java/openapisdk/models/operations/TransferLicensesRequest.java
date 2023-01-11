package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferLicensesRequest {
    public TransferLicensesPathParams pathParams;
    public TransferLicensesRequest withPathParams(TransferLicensesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public TransferLicensesRequestBody request;
    public TransferLicensesRequest withRequest(TransferLicensesRequestBody request) {
        this.request = request;
        return this;
    }
    public TransferLicensesSecurity security;
    public TransferLicensesRequest withSecurity(TransferLicensesSecurity security) {
        this.security = security;
        return this;
    }
}
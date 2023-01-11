package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsTransferRequest {
    public MybusinessAccountsLocationsTransferPathParams pathParams;
    public MybusinessAccountsLocationsTransferRequest withPathParams(MybusinessAccountsLocationsTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsTransferQueryParams queryParams;
    public MybusinessAccountsLocationsTransferRequest withQueryParams(MybusinessAccountsLocationsTransferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferLocationRequest request;
    public MybusinessAccountsLocationsTransferRequest withRequest(openapisdk.models.shared.TransferLocationRequest request) {
        this.request = request;
        return this;
    }
}
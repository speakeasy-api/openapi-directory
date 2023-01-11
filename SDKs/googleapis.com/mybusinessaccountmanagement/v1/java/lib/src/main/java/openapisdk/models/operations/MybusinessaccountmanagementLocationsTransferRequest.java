package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsTransferRequest {
    public MybusinessaccountmanagementLocationsTransferPathParams pathParams;
    public MybusinessaccountmanagementLocationsTransferRequest withPathParams(MybusinessaccountmanagementLocationsTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessaccountmanagementLocationsTransferQueryParams queryParams;
    public MybusinessaccountmanagementLocationsTransferRequest withQueryParams(MybusinessaccountmanagementLocationsTransferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferLocationRequest request;
    public MybusinessaccountmanagementLocationsTransferRequest withRequest(openapisdk.models.shared.TransferLocationRequest request) {
        this.request = request;
        return this;
    }
}
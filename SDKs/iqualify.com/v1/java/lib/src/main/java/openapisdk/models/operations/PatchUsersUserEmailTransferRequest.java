package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersUserEmailTransferRequest {
    public PatchUsersUserEmailTransferPathParams pathParams;
    public PatchUsersUserEmailTransferRequest withPathParams(PatchUsersUserEmailTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferRequest request;
    public PatchUsersUserEmailTransferRequest withRequest(openapisdk.models.shared.TransferRequest request) {
        this.request = request;
        return this;
    }
}
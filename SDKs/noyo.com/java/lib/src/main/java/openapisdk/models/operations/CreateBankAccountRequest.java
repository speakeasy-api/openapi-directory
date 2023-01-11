package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBankAccountRequest {
    public CreateBankAccountPathParams pathParams;
    public CreateBankAccountRequest withPathParams(CreateBankAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankAccountCreateRequest request;
    public CreateBankAccountRequest withRequest(openapisdk.models.shared.BankAccountCreateRequest request) {
        this.request = request;
        return this;
    }
}
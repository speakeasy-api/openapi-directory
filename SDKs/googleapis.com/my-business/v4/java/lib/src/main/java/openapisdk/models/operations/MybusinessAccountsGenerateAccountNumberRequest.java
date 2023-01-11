package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsGenerateAccountNumberRequest {
    public MybusinessAccountsGenerateAccountNumberPathParams pathParams;
    public MybusinessAccountsGenerateAccountNumberRequest withPathParams(MybusinessAccountsGenerateAccountNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsGenerateAccountNumberQueryParams queryParams;
    public MybusinessAccountsGenerateAccountNumberRequest withQueryParams(MybusinessAccountsGenerateAccountNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessAccountsGenerateAccountNumberRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}
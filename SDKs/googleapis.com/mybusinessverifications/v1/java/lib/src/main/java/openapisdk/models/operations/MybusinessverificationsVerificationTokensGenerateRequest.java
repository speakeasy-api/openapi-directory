package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsVerificationTokensGenerateRequest {
    public MybusinessverificationsVerificationTokensGenerateQueryParams queryParams;
    public MybusinessverificationsVerificationTokensGenerateRequest withQueryParams(MybusinessverificationsVerificationTokensGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateVerificationTokenRequest request;
    public MybusinessverificationsVerificationTokensGenerateRequest withRequest(openapisdk.models.shared.GenerateVerificationTokenRequest request) {
        this.request = request;
        return this;
    }
}
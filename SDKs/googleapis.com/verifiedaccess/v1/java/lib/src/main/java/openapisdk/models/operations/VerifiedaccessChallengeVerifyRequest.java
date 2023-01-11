package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifiedaccessChallengeVerifyRequest {
    public VerifiedaccessChallengeVerifyQueryParams queryParams;
    public VerifiedaccessChallengeVerifyRequest withQueryParams(VerifiedaccessChallengeVerifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyChallengeResponseRequest request;
    public VerifiedaccessChallengeVerifyRequest withRequest(openapisdk.models.shared.VerifyChallengeResponseRequest request) {
        this.request = request;
        return this;
    }
    public VerifiedaccessChallengeVerifySecurity security;
    public VerifiedaccessChallengeVerifyRequest withSecurity(VerifiedaccessChallengeVerifySecurity security) {
        this.security = security;
        return this;
    }
}
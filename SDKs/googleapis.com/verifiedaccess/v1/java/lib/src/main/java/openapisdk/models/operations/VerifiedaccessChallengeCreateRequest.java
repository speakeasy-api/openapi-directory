package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifiedaccessChallengeCreateRequest {
    public VerifiedaccessChallengeCreateQueryParams queryParams;
    public VerifiedaccessChallengeCreateRequest withQueryParams(VerifiedaccessChallengeCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VerifiedaccessChallengeCreateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VerifiedaccessChallengeCreateSecurity security;
    public VerifiedaccessChallengeCreateRequest withSecurity(VerifiedaccessChallengeCreateSecurity security) {
        this.security = security;
        return this;
    }
}
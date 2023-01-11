package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenCreateTokenRequest {
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateTokenCreateTokenRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}
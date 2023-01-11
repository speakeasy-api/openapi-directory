package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessTokenCreateAccessTokenRequest {
    @SpeakeasyMetadata("form:name=FactorFriendlyName")
    public String factorFriendlyName;
    public CreateAccessTokenCreateAccessTokenRequest withFactorFriendlyName(String factorFriendlyName) {
        this.factorFriendlyName = factorFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FactorType")
    public openapisdk.models.shared.AccessTokenEnumFactorTypesEnum factorType;
    public CreateAccessTokenCreateAccessTokenRequest withFactorType(openapisdk.models.shared.AccessTokenEnumFactorTypesEnum factorType) {
        this.factorType = factorType;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateAccessTokenCreateAccessTokenRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateAccessTokenCreateAccessTokenRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}
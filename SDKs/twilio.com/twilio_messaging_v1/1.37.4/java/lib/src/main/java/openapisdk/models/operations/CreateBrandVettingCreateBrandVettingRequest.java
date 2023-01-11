package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBrandVettingCreateBrandVettingRequest {
    @SpeakeasyMetadata("form:name=VettingId")
    public String vettingId;
    public CreateBrandVettingCreateBrandVettingRequest withVettingId(String vettingId) {
        this.vettingId = vettingId;
        return this;
    }
    @SpeakeasyMetadata("form:name=VettingProvider")
    public openapisdk.models.shared.BrandVettingEnumVettingProviderEnum vettingProvider;
    public CreateBrandVettingCreateBrandVettingRequest withVettingProvider(openapisdk.models.shared.BrandVettingEnumVettingProviderEnum vettingProvider) {
        this.vettingProvider = vettingProvider;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest {
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams pathParams;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest withPathParams(PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CardPatchRequest request;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest withRequest(openapisdk.models.shared.CardPatchRequest request) {
        this.request = request;
        return this;
    }
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity security;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest withSecurity(PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity security) {
        this.security = security;
        return this;
    }
}
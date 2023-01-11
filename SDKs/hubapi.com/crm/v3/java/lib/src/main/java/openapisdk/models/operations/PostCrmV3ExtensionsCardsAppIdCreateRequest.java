package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCrmV3ExtensionsCardsAppIdCreateRequest {
    public PostCrmV3ExtensionsCardsAppIdCreatePathParams pathParams;
    public PostCrmV3ExtensionsCardsAppIdCreateRequest withPathParams(PostCrmV3ExtensionsCardsAppIdCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CardCreateRequest request;
    public PostCrmV3ExtensionsCardsAppIdCreateRequest withRequest(openapisdk.models.shared.CardCreateRequest request) {
        this.request = request;
        return this;
    }
    public PostCrmV3ExtensionsCardsAppIdCreateSecurity security;
    public PostCrmV3ExtensionsCardsAppIdCreateRequest withSecurity(PostCrmV3ExtensionsCardsAppIdCreateSecurity security) {
        this.security = security;
        return this;
    }
}
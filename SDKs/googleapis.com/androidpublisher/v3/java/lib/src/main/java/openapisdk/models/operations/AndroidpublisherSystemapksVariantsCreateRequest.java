package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherSystemapksVariantsCreateRequest {
    public AndroidpublisherSystemapksVariantsCreatePathParams pathParams;
    public AndroidpublisherSystemapksVariantsCreateRequest withPathParams(AndroidpublisherSystemapksVariantsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherSystemapksVariantsCreateQueryParams queryParams;
    public AndroidpublisherSystemapksVariantsCreateRequest withQueryParams(AndroidpublisherSystemapksVariantsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VariantInput request;
    public AndroidpublisherSystemapksVariantsCreateRequest withRequest(openapisdk.models.shared.VariantInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherSystemapksVariantsCreateSecurity security;
    public AndroidpublisherSystemapksVariantsCreateRequest withSecurity(AndroidpublisherSystemapksVariantsCreateSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesPatchRequest {
    public DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams pathParams;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchRequest withPathParams(DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams queryParams;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchRequest withQueryParams(DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FirstAndThirdPartyAudienceInput request;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchRequest withRequest(openapisdk.models.shared.FirstAndThirdPartyAudienceInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity security;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchRequest withSecurity(DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity security) {
        this.security = security;
        return this;
    }
}
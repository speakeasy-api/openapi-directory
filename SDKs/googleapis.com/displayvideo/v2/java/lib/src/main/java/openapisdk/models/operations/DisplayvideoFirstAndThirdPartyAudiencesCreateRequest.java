package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesCreateRequest {
    public DisplayvideoFirstAndThirdPartyAudiencesCreateQueryParams queryParams;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateRequest withQueryParams(DisplayvideoFirstAndThirdPartyAudiencesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FirstAndThirdPartyAudienceInput request;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateRequest withRequest(openapisdk.models.shared.FirstAndThirdPartyAudienceInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity security;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateRequest withSecurity(DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity security) {
        this.security = security;
        return this;
    }
}
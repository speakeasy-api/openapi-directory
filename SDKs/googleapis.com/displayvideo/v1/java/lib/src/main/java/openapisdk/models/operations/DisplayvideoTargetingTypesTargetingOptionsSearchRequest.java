package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoTargetingTypesTargetingOptionsSearchRequest {
    public DisplayvideoTargetingTypesTargetingOptionsSearchPathParams pathParams;
    public DisplayvideoTargetingTypesTargetingOptionsSearchRequest withPathParams(DisplayvideoTargetingTypesTargetingOptionsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams queryParams;
    public DisplayvideoTargetingTypesTargetingOptionsSearchRequest withQueryParams(DisplayvideoTargetingTypesTargetingOptionsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchTargetingOptionsRequest request;
    public DisplayvideoTargetingTypesTargetingOptionsSearchRequest withRequest(openapisdk.models.shared.SearchTargetingOptionsRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoTargetingTypesTargetingOptionsSearchSecurity security;
    public DisplayvideoTargetingTypesTargetingOptionsSearchRequest withSecurity(DisplayvideoTargetingTypesTargetingOptionsSearchSecurity security) {
        this.security = security;
        return this;
    }
}
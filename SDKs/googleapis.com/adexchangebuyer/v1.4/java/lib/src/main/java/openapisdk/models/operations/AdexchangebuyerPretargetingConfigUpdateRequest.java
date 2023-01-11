package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerPretargetingConfigUpdateRequest {
    public AdexchangebuyerPretargetingConfigUpdatePathParams pathParams;
    public AdexchangebuyerPretargetingConfigUpdateRequest withPathParams(AdexchangebuyerPretargetingConfigUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerPretargetingConfigUpdateQueryParams queryParams;
    public AdexchangebuyerPretargetingConfigUpdateRequest withQueryParams(AdexchangebuyerPretargetingConfigUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PretargetingConfig request;
    public AdexchangebuyerPretargetingConfigUpdateRequest withRequest(openapisdk.models.shared.PretargetingConfig request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerPretargetingConfigUpdateSecurity security;
    public AdexchangebuyerPretargetingConfigUpdateRequest withSecurity(AdexchangebuyerPretargetingConfigUpdateSecurity security) {
        this.security = security;
        return this;
    }
}
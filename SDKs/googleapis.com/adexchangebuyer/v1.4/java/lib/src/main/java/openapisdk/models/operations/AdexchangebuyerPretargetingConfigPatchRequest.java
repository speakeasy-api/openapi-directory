package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerPretargetingConfigPatchRequest {
    public AdexchangebuyerPretargetingConfigPatchPathParams pathParams;
    public AdexchangebuyerPretargetingConfigPatchRequest withPathParams(AdexchangebuyerPretargetingConfigPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerPretargetingConfigPatchQueryParams queryParams;
    public AdexchangebuyerPretargetingConfigPatchRequest withQueryParams(AdexchangebuyerPretargetingConfigPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PretargetingConfig request;
    public AdexchangebuyerPretargetingConfigPatchRequest withRequest(openapisdk.models.shared.PretargetingConfig request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerPretargetingConfigPatchSecurity security;
    public AdexchangebuyerPretargetingConfigPatchRequest withSecurity(AdexchangebuyerPretargetingConfigPatchSecurity security) {
        this.security = security;
        return this;
    }
}
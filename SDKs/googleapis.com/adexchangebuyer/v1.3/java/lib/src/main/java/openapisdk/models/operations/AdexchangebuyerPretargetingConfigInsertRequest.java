package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerPretargetingConfigInsertRequest {
    public AdexchangebuyerPretargetingConfigInsertPathParams pathParams;
    public AdexchangebuyerPretargetingConfigInsertRequest withPathParams(AdexchangebuyerPretargetingConfigInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerPretargetingConfigInsertQueryParams queryParams;
    public AdexchangebuyerPretargetingConfigInsertRequest withQueryParams(AdexchangebuyerPretargetingConfigInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PretargetingConfig request;
    public AdexchangebuyerPretargetingConfigInsertRequest withRequest(openapisdk.models.shared.PretargetingConfig request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerPretargetingConfigInsertSecurity security;
    public AdexchangebuyerPretargetingConfigInsertRequest withSecurity(AdexchangebuyerPretargetingConfigInsertSecurity security) {
        this.security = security;
        return this;
    }
}
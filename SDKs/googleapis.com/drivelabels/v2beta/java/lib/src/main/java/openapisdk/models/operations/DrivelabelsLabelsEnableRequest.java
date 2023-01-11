package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsEnableRequest {
    public DrivelabelsLabelsEnablePathParams pathParams;
    public DrivelabelsLabelsEnableRequest withPathParams(DrivelabelsLabelsEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsEnableQueryParams queryParams;
    public DrivelabelsLabelsEnableRequest withQueryParams(DrivelabelsLabelsEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaEnableLabelRequest request;
    public DrivelabelsLabelsEnableRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaEnableLabelRequest request) {
        this.request = request;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsDisableRequest {
    public DrivelabelsLabelsDisablePathParams pathParams;
    public DrivelabelsLabelsDisableRequest withPathParams(DrivelabelsLabelsDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsDisableQueryParams queryParams;
    public DrivelabelsLabelsDisableRequest withQueryParams(DrivelabelsLabelsDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDisableLabelRequest request;
    public DrivelabelsLabelsDisableRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDisableLabelRequest request) {
        this.request = request;
        return this;
    }
}
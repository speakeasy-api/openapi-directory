package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsDeltaRequest {
    public DrivelabelsLabelsDeltaPathParams pathParams;
    public DrivelabelsLabelsDeltaRequest withPathParams(DrivelabelsLabelsDeltaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsDeltaQueryParams queryParams;
    public DrivelabelsLabelsDeltaRequest withQueryParams(DrivelabelsLabelsDeltaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput request;
    public DrivelabelsLabelsDeltaRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput request) {
        this.request = request;
        return this;
    }
}
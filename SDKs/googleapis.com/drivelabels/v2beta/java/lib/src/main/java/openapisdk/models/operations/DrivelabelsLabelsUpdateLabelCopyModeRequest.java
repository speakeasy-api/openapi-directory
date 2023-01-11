package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsUpdateLabelCopyModeRequest {
    public DrivelabelsLabelsUpdateLabelCopyModePathParams pathParams;
    public DrivelabelsLabelsUpdateLabelCopyModeRequest withPathParams(DrivelabelsLabelsUpdateLabelCopyModePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsUpdateLabelCopyModeQueryParams queryParams;
    public DrivelabelsLabelsUpdateLabelCopyModeRequest withQueryParams(DrivelabelsLabelsUpdateLabelCopyModeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest request;
    public DrivelabelsLabelsUpdateLabelCopyModeRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest request) {
        this.request = request;
        return this;
    }
}
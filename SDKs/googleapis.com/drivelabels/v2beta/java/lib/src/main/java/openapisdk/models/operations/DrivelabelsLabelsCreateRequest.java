package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsCreateRequest {
    public DrivelabelsLabelsCreateQueryParams queryParams;
    public DrivelabelsLabelsCreateRequest withQueryParams(DrivelabelsLabelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelInput request;
    public DrivelabelsLabelsCreateRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelInput request) {
        this.request = request;
        return this;
    }
}
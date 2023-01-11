package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsPublishRequest {
    public DrivelabelsLabelsPublishPathParams pathParams;
    public DrivelabelsLabelsPublishRequest withPathParams(DrivelabelsLabelsPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsPublishQueryParams queryParams;
    public DrivelabelsLabelsPublishRequest withQueryParams(DrivelabelsLabelsPublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaPublishLabelRequest request;
    public DrivelabelsLabelsPublishRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaPublishLabelRequest request) {
        this.request = request;
        return this;
    }
}
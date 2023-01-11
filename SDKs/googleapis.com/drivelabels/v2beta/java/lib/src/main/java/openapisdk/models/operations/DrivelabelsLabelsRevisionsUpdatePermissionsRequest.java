package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsUpdatePermissionsRequest {
    public DrivelabelsLabelsRevisionsUpdatePermissionsPathParams pathParams;
    public DrivelabelsLabelsRevisionsUpdatePermissionsRequest withPathParams(DrivelabelsLabelsRevisionsUpdatePermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams queryParams;
    public DrivelabelsLabelsRevisionsUpdatePermissionsRequest withQueryParams(DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission request;
    public DrivelabelsLabelsRevisionsUpdatePermissionsRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission request) {
        this.request = request;
        return this;
    }
}
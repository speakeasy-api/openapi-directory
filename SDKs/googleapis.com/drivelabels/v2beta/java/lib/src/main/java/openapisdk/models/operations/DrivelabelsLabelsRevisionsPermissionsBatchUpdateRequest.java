package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest {
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams pathParams;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest withPathParams(DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams queryParams;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest withQueryParams(DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest request;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest request) {
        this.request = request;
        return this;
    }
}
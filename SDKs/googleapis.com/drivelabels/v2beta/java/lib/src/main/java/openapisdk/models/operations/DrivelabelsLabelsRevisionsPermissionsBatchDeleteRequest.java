package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest {
    public DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams pathParams;
    public DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest withPathParams(DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams queryParams;
    public DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest withQueryParams(DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest request;
    public DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest request) {
        this.request = request;
        return this;
    }
}
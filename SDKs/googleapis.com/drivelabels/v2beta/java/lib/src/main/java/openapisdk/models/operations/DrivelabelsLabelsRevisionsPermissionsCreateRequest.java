package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsCreateRequest {
    public DrivelabelsLabelsRevisionsPermissionsCreatePathParams pathParams;
    public DrivelabelsLabelsRevisionsPermissionsCreateRequest withPathParams(DrivelabelsLabelsRevisionsPermissionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivelabelsLabelsRevisionsPermissionsCreateQueryParams queryParams;
    public DrivelabelsLabelsRevisionsPermissionsCreateRequest withQueryParams(DrivelabelsLabelsRevisionsPermissionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission request;
    public DrivelabelsLabelsRevisionsPermissionsCreateRequest withRequest(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission request) {
        this.request = request;
        return this;
    }
}
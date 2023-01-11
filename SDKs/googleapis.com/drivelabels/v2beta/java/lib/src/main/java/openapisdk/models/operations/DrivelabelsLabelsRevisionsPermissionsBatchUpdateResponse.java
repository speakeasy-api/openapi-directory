package openapisdk.models.operations;



public class DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse {
    public String contentType;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse withGoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse) {
        this.googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse = googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
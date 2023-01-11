package openapisdk.models.operations;



public class DrivelabelsLabelsRevisionsPermissionsListResponse {
    public String contentType;
    public DrivelabelsLabelsRevisionsPermissionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse googleAppsDriveLabelsV2betaListLabelPermissionsResponse;
    public DrivelabelsLabelsRevisionsPermissionsListResponse withGoogleAppsDriveLabelsV2betaListLabelPermissionsResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse googleAppsDriveLabelsV2betaListLabelPermissionsResponse) {
        this.googleAppsDriveLabelsV2betaListLabelPermissionsResponse = googleAppsDriveLabelsV2betaListLabelPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsRevisionsPermissionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
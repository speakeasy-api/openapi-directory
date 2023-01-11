package openapisdk.models.operations;



public class DrivelabelsLabelsRevisionsUpdatePermissionsResponse {
    public String contentType;
    public DrivelabelsLabelsRevisionsUpdatePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission googleAppsDriveLabelsV2betaLabelPermission;
    public DrivelabelsLabelsRevisionsUpdatePermissionsResponse withGoogleAppsDriveLabelsV2betaLabelPermission(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission googleAppsDriveLabelsV2betaLabelPermission) {
        this.googleAppsDriveLabelsV2betaLabelPermission = googleAppsDriveLabelsV2betaLabelPermission;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsRevisionsUpdatePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
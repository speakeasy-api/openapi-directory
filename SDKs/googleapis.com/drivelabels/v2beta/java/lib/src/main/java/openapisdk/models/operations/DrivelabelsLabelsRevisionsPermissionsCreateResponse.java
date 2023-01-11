package openapisdk.models.operations;



public class DrivelabelsLabelsRevisionsPermissionsCreateResponse {
    public String contentType;
    public DrivelabelsLabelsRevisionsPermissionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission googleAppsDriveLabelsV2betaLabelPermission;
    public DrivelabelsLabelsRevisionsPermissionsCreateResponse withGoogleAppsDriveLabelsV2betaLabelPermission(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission googleAppsDriveLabelsV2betaLabelPermission) {
        this.googleAppsDriveLabelsV2betaLabelPermission = googleAppsDriveLabelsV2betaLabelPermission;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsRevisionsPermissionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
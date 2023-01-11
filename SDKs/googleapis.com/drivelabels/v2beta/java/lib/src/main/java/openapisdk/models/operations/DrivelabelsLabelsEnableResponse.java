package openapisdk.models.operations;



public class DrivelabelsLabelsEnableResponse {
    public String contentType;
    public DrivelabelsLabelsEnableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel;
    public DrivelabelsLabelsEnableResponse withGoogleAppsDriveLabelsV2betaLabel(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel) {
        this.googleAppsDriveLabelsV2betaLabel = googleAppsDriveLabelsV2betaLabel;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsEnableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DrivelabelsLabelsDisableResponse {
    public String contentType;
    public DrivelabelsLabelsDisableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel;
    public DrivelabelsLabelsDisableResponse withGoogleAppsDriveLabelsV2betaLabel(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel) {
        this.googleAppsDriveLabelsV2betaLabel = googleAppsDriveLabelsV2betaLabel;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsDisableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
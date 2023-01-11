package openapisdk.models.operations;



public class DrivelabelsLabelsPublishResponse {
    public String contentType;
    public DrivelabelsLabelsPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel;
    public DrivelabelsLabelsPublishResponse withGoogleAppsDriveLabelsV2betaLabel(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel) {
        this.googleAppsDriveLabelsV2betaLabel = googleAppsDriveLabelsV2betaLabel;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DrivelabelsLabelsCreateResponse {
    public String contentType;
    public DrivelabelsLabelsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel;
    public DrivelabelsLabelsCreateResponse withGoogleAppsDriveLabelsV2betaLabel(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel) {
        this.googleAppsDriveLabelsV2betaLabel = googleAppsDriveLabelsV2betaLabel;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
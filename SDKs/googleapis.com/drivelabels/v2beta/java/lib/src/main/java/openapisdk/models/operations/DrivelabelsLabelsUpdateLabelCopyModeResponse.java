package openapisdk.models.operations;



public class DrivelabelsLabelsUpdateLabelCopyModeResponse {
    public String contentType;
    public DrivelabelsLabelsUpdateLabelCopyModeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel;
    public DrivelabelsLabelsUpdateLabelCopyModeResponse withGoogleAppsDriveLabelsV2betaLabel(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel googleAppsDriveLabelsV2betaLabel) {
        this.googleAppsDriveLabelsV2betaLabel = googleAppsDriveLabelsV2betaLabel;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsUpdateLabelCopyModeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
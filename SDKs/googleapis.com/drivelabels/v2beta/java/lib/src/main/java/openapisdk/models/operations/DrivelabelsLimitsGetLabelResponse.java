package openapisdk.models.operations;



public class DrivelabelsLimitsGetLabelResponse {
    public String contentType;
    public DrivelabelsLimitsGetLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelLimits googleAppsDriveLabelsV2betaLabelLimits;
    public DrivelabelsLimitsGetLabelResponse withGoogleAppsDriveLabelsV2betaLabelLimits(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelLimits googleAppsDriveLabelsV2betaLabelLimits) {
        this.googleAppsDriveLabelsV2betaLabelLimits = googleAppsDriveLabelsV2betaLabelLimits;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLimitsGetLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
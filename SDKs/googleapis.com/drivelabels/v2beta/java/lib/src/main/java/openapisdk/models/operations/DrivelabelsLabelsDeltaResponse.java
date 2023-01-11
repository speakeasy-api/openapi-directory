package openapisdk.models.operations;



public class DrivelabelsLabelsDeltaResponse {
    public String contentType;
    public DrivelabelsLabelsDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse;
    public DrivelabelsLabelsDeltaResponse withGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse) {
        this.googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse = googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
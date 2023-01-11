package openapisdk.models.operations;



public class DrivelabelsLabelsListResponse {
    public String contentType;
    public DrivelabelsLabelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelsResponse googleAppsDriveLabelsV2betaListLabelsResponse;
    public DrivelabelsLabelsListResponse withGoogleAppsDriveLabelsV2betaListLabelsResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelsResponse googleAppsDriveLabelsV2betaListLabelsResponse) {
        this.googleAppsDriveLabelsV2betaListLabelsResponse = googleAppsDriveLabelsV2betaListLabelsResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
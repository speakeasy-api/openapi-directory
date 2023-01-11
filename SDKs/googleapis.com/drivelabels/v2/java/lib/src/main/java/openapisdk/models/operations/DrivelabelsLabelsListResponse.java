package openapisdk.models.operations;



public class DrivelabelsLabelsListResponse {
    public String contentType;
    public DrivelabelsLabelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2ListLabelsResponse googleAppsDriveLabelsV2ListLabelsResponse;
    public DrivelabelsLabelsListResponse withGoogleAppsDriveLabelsV2ListLabelsResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2ListLabelsResponse googleAppsDriveLabelsV2ListLabelsResponse) {
        this.googleAppsDriveLabelsV2ListLabelsResponse = googleAppsDriveLabelsV2ListLabelsResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
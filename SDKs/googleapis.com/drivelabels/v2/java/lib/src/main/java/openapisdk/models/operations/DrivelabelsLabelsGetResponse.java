package openapisdk.models.operations;



public class DrivelabelsLabelsGetResponse {
    public String contentType;
    public DrivelabelsLabelsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2Label googleAppsDriveLabelsV2Label;
    public DrivelabelsLabelsGetResponse withGoogleAppsDriveLabelsV2Label(openapisdk.models.shared.GoogleAppsDriveLabelsV2Label googleAppsDriveLabelsV2Label) {
        this.googleAppsDriveLabelsV2Label = googleAppsDriveLabelsV2Label;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
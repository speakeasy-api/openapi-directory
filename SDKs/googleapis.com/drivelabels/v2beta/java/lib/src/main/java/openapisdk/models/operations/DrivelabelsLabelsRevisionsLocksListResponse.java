package openapisdk.models.operations;



public class DrivelabelsLabelsRevisionsLocksListResponse {
    public String contentType;
    public DrivelabelsLabelsRevisionsLocksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse googleAppsDriveLabelsV2betaListLabelLocksResponse;
    public DrivelabelsLabelsRevisionsLocksListResponse withGoogleAppsDriveLabelsV2betaListLabelLocksResponse(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse googleAppsDriveLabelsV2betaListLabelLocksResponse) {
        this.googleAppsDriveLabelsV2betaListLabelLocksResponse = googleAppsDriveLabelsV2betaListLabelLocksResponse;
        return this;
    }
    public Long statusCode;
    public DrivelabelsLabelsRevisionsLocksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
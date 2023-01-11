package openapisdk.models.operations;



public class DisplayvideoGoogleAudiencesListResponse {
    public String contentType;
    public DisplayvideoGoogleAudiencesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGoogleAudiencesResponse listGoogleAudiencesResponse;
    public DisplayvideoGoogleAudiencesListResponse withListGoogleAudiencesResponse(openapisdk.models.shared.ListGoogleAudiencesResponse listGoogleAudiencesResponse) {
        this.listGoogleAudiencesResponse = listGoogleAudiencesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGoogleAudiencesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
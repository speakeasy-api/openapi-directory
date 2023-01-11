package openapisdk.models.operations;



public class DisplayvideoCombinedAudiencesListResponse {
    public String contentType;
    public DisplayvideoCombinedAudiencesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCombinedAudiencesResponse listCombinedAudiencesResponse;
    public DisplayvideoCombinedAudiencesListResponse withListCombinedAudiencesResponse(openapisdk.models.shared.ListCombinedAudiencesResponse listCombinedAudiencesResponse) {
        this.listCombinedAudiencesResponse = listCombinedAudiencesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCombinedAudiencesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
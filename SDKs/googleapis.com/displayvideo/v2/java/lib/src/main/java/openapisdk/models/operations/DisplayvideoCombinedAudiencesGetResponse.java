package openapisdk.models.operations;



public class DisplayvideoCombinedAudiencesGetResponse {
    public openapisdk.models.shared.CombinedAudience combinedAudience;
    public DisplayvideoCombinedAudiencesGetResponse withCombinedAudience(openapisdk.models.shared.CombinedAudience combinedAudience) {
        this.combinedAudience = combinedAudience;
        return this;
    }
    public String contentType;
    public DisplayvideoCombinedAudiencesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCombinedAudiencesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DisplayvideoFirstAndThirdPartyAudiencesGetResponse {
    public String contentType;
    public DisplayvideoFirstAndThirdPartyAudiencesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience;
    public DisplayvideoFirstAndThirdPartyAudiencesGetResponse withFirstAndThirdPartyAudience(openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience) {
        this.firstAndThirdPartyAudience = firstAndThirdPartyAudience;
        return this;
    }
    public Long statusCode;
    public DisplayvideoFirstAndThirdPartyAudiencesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
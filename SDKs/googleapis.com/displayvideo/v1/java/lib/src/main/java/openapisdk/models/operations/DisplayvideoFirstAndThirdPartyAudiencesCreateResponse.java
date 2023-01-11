package openapisdk.models.operations;



public class DisplayvideoFirstAndThirdPartyAudiencesCreateResponse {
    public String contentType;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateResponse withFirstAndThirdPartyAudience(openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience) {
        this.firstAndThirdPartyAudience = firstAndThirdPartyAudience;
        return this;
    }
    public Long statusCode;
    public DisplayvideoFirstAndThirdPartyAudiencesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
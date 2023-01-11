package openapisdk.models.operations;



public class DisplayvideoFirstAndThirdPartyAudiencesPatchResponse {
    public String contentType;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchResponse withFirstAndThirdPartyAudience(openapisdk.models.shared.FirstAndThirdPartyAudience firstAndThirdPartyAudience) {
        this.firstAndThirdPartyAudience = firstAndThirdPartyAudience;
        return this;
    }
    public Long statusCode;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
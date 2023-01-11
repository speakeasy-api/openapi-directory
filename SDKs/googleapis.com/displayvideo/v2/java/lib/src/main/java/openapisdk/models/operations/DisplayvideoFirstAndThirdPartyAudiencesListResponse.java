package openapisdk.models.operations;



public class DisplayvideoFirstAndThirdPartyAudiencesListResponse {
    public String contentType;
    public DisplayvideoFirstAndThirdPartyAudiencesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFirstAndThirdPartyAudiencesResponse listFirstAndThirdPartyAudiencesResponse;
    public DisplayvideoFirstAndThirdPartyAudiencesListResponse withListFirstAndThirdPartyAudiencesResponse(openapisdk.models.shared.ListFirstAndThirdPartyAudiencesResponse listFirstAndThirdPartyAudiencesResponse) {
        this.listFirstAndThirdPartyAudiencesResponse = listFirstAndThirdPartyAudiencesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoFirstAndThirdPartyAudiencesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
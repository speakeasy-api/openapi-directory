package openapisdk.models.operations;



public class GetVideoCreditsResponse {
    public String contentType;
    public GetVideoCreditsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCreditsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit[] credits;
    public GetVideoCreditsResponse withCredits(openapisdk.models.shared.Credit[] credits) {
        this.credits = credits;
        return this;
    }
}
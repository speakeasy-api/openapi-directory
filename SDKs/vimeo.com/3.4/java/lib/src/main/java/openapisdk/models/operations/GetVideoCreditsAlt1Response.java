package openapisdk.models.operations;



public class GetVideoCreditsAlt1Response {
    public String contentType;
    public GetVideoCreditsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCreditsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit[] credits;
    public GetVideoCreditsAlt1Response withCredits(openapisdk.models.shared.Credit[] credits) {
        this.credits = credits;
        return this;
    }
}
package openapisdk.models.operations;



public class GetIndustriesResponse {
    public String contentType;
    public GetIndustriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetIndustriesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Industry[] industries;
    public GetIndustriesResponse withIndustries(openapisdk.models.shared.Industry[] industries) {
        this.industries = industries;
        return this;
    }
    public Long statusCode;
    public GetIndustriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
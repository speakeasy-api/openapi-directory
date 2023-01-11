package openapisdk.models.operations;



public class CreateVodResponse {
    public String contentType;
    public CreateVodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage onDemandPage;
    public CreateVodResponse withOnDemandPage(openapisdk.models.shared.OnDemandPage onDemandPage) {
        this.onDemandPage = onDemandPage;
        return this;
    }
}
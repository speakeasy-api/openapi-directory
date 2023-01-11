package openapisdk.models.operations;



public class GetImagePerformancesResponse {
    public byte[] body;
    public GetImagePerformancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetImagePerformancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePerformance[] imagePerformances;
    public GetImagePerformancesResponse withImagePerformances(openapisdk.models.shared.ImagePerformance[] imagePerformances) {
        this.imagePerformances = imagePerformances;
        return this;
    }
    public Long statusCode;
    public GetImagePerformancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
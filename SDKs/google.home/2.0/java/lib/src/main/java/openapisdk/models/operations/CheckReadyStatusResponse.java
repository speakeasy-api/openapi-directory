package openapisdk.models.operations;



public class CheckReadyStatusResponse {
    public String contentType;
    public CheckReadyStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example13 example13;
    public CheckReadyStatusResponse withExample13(openapisdk.models.shared.Example13 example13) {
        this.example13 = example13;
        return this;
    }
    public Long statusCode;
    public CheckReadyStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
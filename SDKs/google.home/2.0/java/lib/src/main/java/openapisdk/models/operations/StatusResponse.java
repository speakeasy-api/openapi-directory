package openapisdk.models.operations;



public class StatusResponse {
    public String contentType;
    public StatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example110 example110;
    public StatusResponse withExample110(openapisdk.models.shared.Example110 example110) {
        this.example110 = example110;
        return this;
    }
    public Long statusCode;
    public StatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
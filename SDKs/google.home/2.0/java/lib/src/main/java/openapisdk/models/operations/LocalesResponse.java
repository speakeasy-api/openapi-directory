package openapisdk.models.operations;



public class LocalesResponse {
    public String contentType;
    public LocalesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example15[] example15s;
    public LocalesResponse withExample15s(openapisdk.models.shared.Example15[] example15s) {
        this.example15s = example15s;
        return this;
    }
    public Long statusCode;
    public LocalesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
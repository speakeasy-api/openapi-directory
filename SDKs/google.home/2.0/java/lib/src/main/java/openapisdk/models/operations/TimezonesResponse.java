package openapisdk.models.operations;



public class TimezonesResponse {
    public String contentType;
    public TimezonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example14[] example14s;
    public TimezonesResponse withExample14s(openapisdk.models.shared.Example14[] example14s) {
        this.example14s = example14s;
        return this;
    }
    public Long statusCode;
    public TimezonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
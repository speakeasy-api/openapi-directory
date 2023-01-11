package openapisdk.models.operations;



public class FetchSimResponse {
    public String contentType;
    public FetchSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Sim supersimV1Sim;
    public FetchSimResponse withSupersimV1Sim(openapisdk.models.shared.SupersimV1Sim supersimV1Sim) {
        this.supersimV1Sim = supersimV1Sim;
        return this;
    }
}
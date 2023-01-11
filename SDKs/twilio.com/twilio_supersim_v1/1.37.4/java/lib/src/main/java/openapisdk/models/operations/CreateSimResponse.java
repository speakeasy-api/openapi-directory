package openapisdk.models.operations;



public class CreateSimResponse {
    public String contentType;
    public CreateSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Sim supersimV1Sim;
    public CreateSimResponse withSupersimV1Sim(openapisdk.models.shared.SupersimV1Sim supersimV1Sim) {
        this.supersimV1Sim = supersimV1Sim;
        return this;
    }
}
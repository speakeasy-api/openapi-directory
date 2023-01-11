package openapisdk.models.operations;



public class UpdateSimResponse {
    public String contentType;
    public UpdateSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Sim supersimV1Sim;
    public UpdateSimResponse withSupersimV1Sim(openapisdk.models.shared.SupersimV1Sim supersimV1Sim) {
        this.supersimV1Sim = supersimV1Sim;
        return this;
    }
}
package openapisdk.models.operations;



public class CreateFleetResponse {
    public String contentType;
    public CreateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet;
    public CreateFleetResponse withSupersimV1Fleet(openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet) {
        this.supersimV1Fleet = supersimV1Fleet;
        return this;
    }
}
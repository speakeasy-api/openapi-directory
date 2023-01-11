package openapisdk.models.operations;



public class UpdateFleetResponse {
    public String contentType;
    public UpdateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet;
    public UpdateFleetResponse withSupersimV1Fleet(openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet) {
        this.supersimV1Fleet = supersimV1Fleet;
        return this;
    }
}
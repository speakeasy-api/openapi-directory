package openapisdk.models.operations;



public class FetchFleetResponse {
    public String contentType;
    public FetchFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet;
    public FetchFleetResponse withSupersimV1Fleet(openapisdk.models.shared.SupersimV1Fleet supersimV1Fleet) {
        this.supersimV1Fleet = supersimV1Fleet;
        return this;
    }
}
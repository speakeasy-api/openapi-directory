package openapisdk.models.operations;



public class DeparturesGetForStopResponse {
    public byte[] body;
    public DeparturesGetForStopResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeparturesGetForStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeparturesGetForStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DeparturesResponse v3DeparturesResponse;
    public DeparturesGetForStopResponse withV3DeparturesResponse(openapisdk.models.shared.V3DeparturesResponse v3DeparturesResponse) {
        this.v3DeparturesResponse = v3DeparturesResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DeparturesGetForStopResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}
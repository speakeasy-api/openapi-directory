package openapisdk.models.operations;



public class DeparturesGetForStopAndRouteResponse {
    public byte[] body;
    public DeparturesGetForStopAndRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeparturesGetForStopAndRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeparturesGetForStopAndRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DeparturesResponse v3DeparturesResponse;
    public DeparturesGetForStopAndRouteResponse withV3DeparturesResponse(openapisdk.models.shared.V3DeparturesResponse v3DeparturesResponse) {
        this.v3DeparturesResponse = v3DeparturesResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DeparturesGetForStopAndRouteResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}
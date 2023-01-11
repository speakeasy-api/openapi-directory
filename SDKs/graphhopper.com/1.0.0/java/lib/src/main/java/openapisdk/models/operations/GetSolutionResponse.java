package openapisdk.models.operations;



public class GetSolutionResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public GetSolutionResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public GetSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSolutionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public GetSolutionResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public GetSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSolution404ApplicationJson getSolution404ApplicationJSONObject;
    public GetSolutionResponse withGetSolution404ApplicationJsonObject(GetSolution404ApplicationJson getSolution404ApplicationJSONObject) {
        this.getSolution404ApplicationJSONObject = getSolution404ApplicationJSONObject;
        return this;
    }
}
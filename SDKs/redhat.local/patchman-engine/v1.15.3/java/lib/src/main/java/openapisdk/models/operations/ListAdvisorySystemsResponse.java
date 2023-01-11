package openapisdk.models.operations;



public class ListAdvisorySystemsResponse {
    public String contentType;
    public ListAdvisorySystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAdvisorySystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersAdvisorySystemsResponse controllersAdvisorySystemsResponse;
    public ListAdvisorySystemsResponse withControllersAdvisorySystemsResponse(openapisdk.models.shared.ControllersAdvisorySystemsResponse controllersAdvisorySystemsResponse) {
        this.controllersAdvisorySystemsResponse = controllersAdvisorySystemsResponse;
        return this;
    }
}
package openapisdk.models.operations;



public class ListSystemsResponse {
    public String contentType;
    public ListSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemsResponse controllersSystemsResponse;
    public ListSystemsResponse withControllersSystemsResponse(openapisdk.models.shared.ControllersSystemsResponse controllersSystemsResponse) {
        this.controllersSystemsResponse = controllersSystemsResponse;
        return this;
    }
}
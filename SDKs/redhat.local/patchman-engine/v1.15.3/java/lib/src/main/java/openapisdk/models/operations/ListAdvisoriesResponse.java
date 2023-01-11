package openapisdk.models.operations;



public class ListAdvisoriesResponse {
    public String contentType;
    public ListAdvisoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAdvisoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersAdvisoriesResponse controllersAdvisoriesResponse;
    public ListAdvisoriesResponse withControllersAdvisoriesResponse(openapisdk.models.shared.ControllersAdvisoriesResponse controllersAdvisoriesResponse) {
        this.controllersAdvisoriesResponse = controllersAdvisoriesResponse;
        return this;
    }
}
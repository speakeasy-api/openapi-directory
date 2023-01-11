package openapisdk.models.operations;



public class ViewAdvisoriesSystemsResponse {
    public String contentType;
    public ViewAdvisoriesSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ViewAdvisoriesSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersAdvisoriesSystemsResponse controllersAdvisoriesSystemsResponse;
    public ViewAdvisoriesSystemsResponse withControllersAdvisoriesSystemsResponse(openapisdk.models.shared.ControllersAdvisoriesSystemsResponse controllersAdvisoriesSystemsResponse) {
        this.controllersAdvisoriesSystemsResponse = controllersAdvisoriesSystemsResponse;
        return this;
    }
}
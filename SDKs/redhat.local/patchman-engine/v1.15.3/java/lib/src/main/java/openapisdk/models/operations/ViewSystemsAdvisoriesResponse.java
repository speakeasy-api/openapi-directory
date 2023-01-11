package openapisdk.models.operations;



public class ViewSystemsAdvisoriesResponse {
    public String contentType;
    public ViewSystemsAdvisoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ViewSystemsAdvisoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemsAdvisoriesResponse controllersSystemsAdvisoriesResponse;
    public ViewSystemsAdvisoriesResponse withControllersSystemsAdvisoriesResponse(openapisdk.models.shared.ControllersSystemsAdvisoriesResponse controllersSystemsAdvisoriesResponse) {
        this.controllersSystemsAdvisoriesResponse = controllersSystemsAdvisoriesResponse;
        return this;
    }
}
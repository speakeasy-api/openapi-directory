package openapisdk.models.operations;



public class ListSystemAdvisoriesResponse {
    public String contentType;
    public ListSystemAdvisoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSystemAdvisoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemAdvisoriesResponse controllersSystemAdvisoriesResponse;
    public ListSystemAdvisoriesResponse withControllersSystemAdvisoriesResponse(openapisdk.models.shared.ControllersSystemAdvisoriesResponse controllersSystemAdvisoriesResponse) {
        this.controllersSystemAdvisoriesResponse = controllersSystemAdvisoriesResponse;
        return this;
    }
}
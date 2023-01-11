package openapisdk.models.operations;



public class ShowServicePlanResponse {
    public String contentType;
    public ShowServicePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServicePlanResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServicePlan servicePlan;
    public ShowServicePlanResponse withServicePlan(openapisdk.models.shared.ServicePlan servicePlan) {
        this.servicePlan = servicePlan;
        return this;
    }
    public Long statusCode;
    public ShowServicePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
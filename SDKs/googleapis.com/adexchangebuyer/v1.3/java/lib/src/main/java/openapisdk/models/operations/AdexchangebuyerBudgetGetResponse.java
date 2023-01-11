package openapisdk.models.operations;



public class AdexchangebuyerBudgetGetResponse {
    public openapisdk.models.shared.Budget budget;
    public AdexchangebuyerBudgetGetResponse withBudget(openapisdk.models.shared.Budget budget) {
        this.budget = budget;
        return this;
    }
    public String contentType;
    public AdexchangebuyerBudgetGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerBudgetGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class AdexchangebuyerBudgetUpdateResponse {
    public openapisdk.models.shared.Budget budget;
    public AdexchangebuyerBudgetUpdateResponse withBudget(openapisdk.models.shared.Budget budget) {
        this.budget = budget;
        return this;
    }
    public String contentType;
    public AdexchangebuyerBudgetUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerBudgetUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class AdexchangebuyerBudgetPatchResponse {
    public openapisdk.models.shared.Budget budget;
    public AdexchangebuyerBudgetPatchResponse withBudget(openapisdk.models.shared.Budget budget) {
        this.budget = budget;
        return this;
    }
    public String contentType;
    public AdexchangebuyerBudgetPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerBudgetPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
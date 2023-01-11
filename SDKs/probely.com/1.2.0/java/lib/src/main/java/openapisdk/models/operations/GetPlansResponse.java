package openapisdk.models.operations;



public class GetPlansResponse {
    public String contentType;
    public GetPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Plan[] plans;
    public GetPlansResponse withPlans(openapisdk.models.shared.Plan[] plans) {
        this.plans = plans;
        return this;
    }
    public Long statusCode;
    public GetPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
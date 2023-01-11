package openapisdk.models.operations;



public class FetchRatePlanResponse {
    public String contentType;
    public FetchRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan;
    public FetchRatePlanResponse withWirelessV1RatePlan(openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan) {
        this.wirelessV1RatePlan = wirelessV1RatePlan;
        return this;
    }
}
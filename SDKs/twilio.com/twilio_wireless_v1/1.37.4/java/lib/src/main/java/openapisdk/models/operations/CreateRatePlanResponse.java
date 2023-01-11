package openapisdk.models.operations;



public class CreateRatePlanResponse {
    public String contentType;
    public CreateRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan;
    public CreateRatePlanResponse withWirelessV1RatePlan(openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan) {
        this.wirelessV1RatePlan = wirelessV1RatePlan;
        return this;
    }
}
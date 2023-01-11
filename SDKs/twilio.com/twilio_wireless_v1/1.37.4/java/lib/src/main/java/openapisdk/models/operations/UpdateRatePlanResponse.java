package openapisdk.models.operations;



public class UpdateRatePlanResponse {
    public String contentType;
    public UpdateRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan;
    public UpdateRatePlanResponse withWirelessV1RatePlan(openapisdk.models.shared.WirelessV1RatePlan wirelessV1RatePlan) {
        this.wirelessV1RatePlan = wirelessV1RatePlan;
        return this;
    }
}
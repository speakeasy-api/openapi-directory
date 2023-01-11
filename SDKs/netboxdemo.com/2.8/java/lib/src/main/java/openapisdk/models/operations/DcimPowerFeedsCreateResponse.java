package openapisdk.models.operations;



public class DcimPowerFeedsCreateResponse {
    public String contentType;
    public DcimPowerFeedsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerFeed powerFeed;
    public DcimPowerFeedsCreateResponse withPowerFeed(openapisdk.models.shared.PowerFeed powerFeed) {
        this.powerFeed = powerFeed;
        return this;
    }
    public Long statusCode;
    public DcimPowerFeedsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
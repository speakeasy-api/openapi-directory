package openapisdk.models.operations;



public class DcimPowerFeedsUpdateResponse {
    public String contentType;
    public DcimPowerFeedsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerFeed powerFeed;
    public DcimPowerFeedsUpdateResponse withPowerFeed(openapisdk.models.shared.PowerFeed powerFeed) {
        this.powerFeed = powerFeed;
        return this;
    }
    public Long statusCode;
    public DcimPowerFeedsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
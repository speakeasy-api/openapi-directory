package openapisdk.models.operations;



public class DcimPowerFeedsReadResponse {
    public String contentType;
    public DcimPowerFeedsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerFeed powerFeed;
    public DcimPowerFeedsReadResponse withPowerFeed(openapisdk.models.shared.PowerFeed powerFeed) {
        this.powerFeed = powerFeed;
        return this;
    }
    public Long statusCode;
    public DcimPowerFeedsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
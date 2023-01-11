package openapisdk.models.operations;



public class DcimPowerFeedsPartialUpdateResponse {
    public String contentType;
    public DcimPowerFeedsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerFeed powerFeed;
    public DcimPowerFeedsPartialUpdateResponse withPowerFeed(openapisdk.models.shared.PowerFeed powerFeed) {
        this.powerFeed = powerFeed;
        return this;
    }
    public Long statusCode;
    public DcimPowerFeedsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
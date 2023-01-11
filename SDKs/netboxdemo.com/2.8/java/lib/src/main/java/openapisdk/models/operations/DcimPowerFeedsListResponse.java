package openapisdk.models.operations;



public class DcimPowerFeedsListResponse {
    public String contentType;
    public DcimPowerFeedsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerFeedsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerFeedsList200ApplicationJson dcimPowerFeedsList200ApplicationJSONObject;
    public DcimPowerFeedsListResponse withDcimPowerFeedsList200ApplicationJsonObject(DcimPowerFeedsList200ApplicationJson dcimPowerFeedsList200ApplicationJSONObject) {
        this.dcimPowerFeedsList200ApplicationJSONObject = dcimPowerFeedsList200ApplicationJSONObject;
        return this;
    }
}
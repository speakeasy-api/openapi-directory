package openapisdk.models.operations;



public class PostApplicationChargeResponse {
    public String contentType;
    public PostApplicationChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostApplicationChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostApplicationCharge201ApplicationJson postApplicationCharge201ApplicationJSONObject;
    public PostApplicationChargeResponse withPostApplicationCharge201ApplicationJsonObject(PostApplicationCharge201ApplicationJson postApplicationCharge201ApplicationJSONObject) {
        this.postApplicationCharge201ApplicationJSONObject = postApplicationCharge201ApplicationJSONObject;
        return this;
    }
}
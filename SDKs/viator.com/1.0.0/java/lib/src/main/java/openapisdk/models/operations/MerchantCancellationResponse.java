package openapisdk.models.operations;



public class MerchantCancellationResponse {
    public String contentType;
    public MerchantCancellationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MerchantCancellationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MerchantCancellation200ApplicationJson merchantCancellation200ApplicationJSONObject;
    public MerchantCancellationResponse withMerchantCancellation200ApplicationJsonObject(MerchantCancellation200ApplicationJson merchantCancellation200ApplicationJSONObject) {
        this.merchantCancellation200ApplicationJSONObject = merchantCancellation200ApplicationJSONObject;
        return this;
    }
    public MerchantCancellation400ApplicationJson merchantCancellation400ApplicationJSONObject;
    public MerchantCancellationResponse withMerchantCancellation400ApplicationJsonObject(MerchantCancellation400ApplicationJson merchantCancellation400ApplicationJSONObject) {
        this.merchantCancellation400ApplicationJSONObject = merchantCancellation400ApplicationJSONObject;
        return this;
    }
}
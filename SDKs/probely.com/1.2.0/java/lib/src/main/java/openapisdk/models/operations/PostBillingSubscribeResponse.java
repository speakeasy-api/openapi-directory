package openapisdk.models.operations;



public class PostBillingSubscribeResponse {
    public String contentType;
    public PostBillingSubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Invoice invoice;
    public PostBillingSubscribeResponse withInvoice(openapisdk.models.shared.Invoice invoice) {
        this.invoice = invoice;
        return this;
    }
    public Long statusCode;
    public PostBillingSubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostBillingSubscribe400ApplicationJson postBillingSubscribe400ApplicationJSONObject;
    public PostBillingSubscribeResponse withPostBillingSubscribe400ApplicationJsonObject(PostBillingSubscribe400ApplicationJson postBillingSubscribe400ApplicationJSONObject) {
        this.postBillingSubscribe400ApplicationJSONObject = postBillingSubscribe400ApplicationJSONObject;
        return this;
    }
    public PostBillingSubscribe401ApplicationJson postBillingSubscribe401ApplicationJSONObject;
    public PostBillingSubscribeResponse withPostBillingSubscribe401ApplicationJsonObject(PostBillingSubscribe401ApplicationJson postBillingSubscribe401ApplicationJSONObject) {
        this.postBillingSubscribe401ApplicationJSONObject = postBillingSubscribe401ApplicationJSONObject;
        return this;
    }
    public PostBillingSubscribe403ApplicationJson postBillingSubscribe403ApplicationJSONObject;
    public PostBillingSubscribeResponse withPostBillingSubscribe403ApplicationJsonObject(PostBillingSubscribe403ApplicationJson postBillingSubscribe403ApplicationJSONObject) {
        this.postBillingSubscribe403ApplicationJSONObject = postBillingSubscribe403ApplicationJSONObject;
        return this;
    }
}
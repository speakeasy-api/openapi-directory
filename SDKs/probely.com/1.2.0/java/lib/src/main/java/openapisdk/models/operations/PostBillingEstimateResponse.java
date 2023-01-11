package openapisdk.models.operations;



public class PostBillingEstimateResponse {
    public String contentType;
    public PostBillingEstimateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Invoice invoice;
    public PostBillingEstimateResponse withInvoice(openapisdk.models.shared.Invoice invoice) {
        this.invoice = invoice;
        return this;
    }
    public Long statusCode;
    public PostBillingEstimateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostBillingEstimate400ApplicationJson postBillingEstimate400ApplicationJSONObject;
    public PostBillingEstimateResponse withPostBillingEstimate400ApplicationJsonObject(PostBillingEstimate400ApplicationJson postBillingEstimate400ApplicationJSONObject) {
        this.postBillingEstimate400ApplicationJSONObject = postBillingEstimate400ApplicationJSONObject;
        return this;
    }
    public PostBillingEstimate401ApplicationJson postBillingEstimate401ApplicationJSONObject;
    public PostBillingEstimateResponse withPostBillingEstimate401ApplicationJsonObject(PostBillingEstimate401ApplicationJson postBillingEstimate401ApplicationJSONObject) {
        this.postBillingEstimate401ApplicationJSONObject = postBillingEstimate401ApplicationJSONObject;
        return this;
    }
    public PostBillingEstimate403ApplicationJson postBillingEstimate403ApplicationJSONObject;
    public PostBillingEstimateResponse withPostBillingEstimate403ApplicationJsonObject(PostBillingEstimate403ApplicationJson postBillingEstimate403ApplicationJSONObject) {
        this.postBillingEstimate403ApplicationJSONObject = postBillingEstimate403ApplicationJSONObject;
        return this;
    }
}
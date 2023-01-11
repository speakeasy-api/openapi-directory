package openapisdk.models.operations;



public class PutBillingResponse {
    public openapisdk.models.shared.Billing billing;
    public PutBillingResponse withBilling(openapisdk.models.shared.Billing billing) {
        this.billing = billing;
        return this;
    }
    public String contentType;
    public PutBillingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutBillingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutBilling401ApplicationJson putBilling401ApplicationJSONObject;
    public PutBillingResponse withPutBilling401ApplicationJsonObject(PutBilling401ApplicationJson putBilling401ApplicationJSONObject) {
        this.putBilling401ApplicationJSONObject = putBilling401ApplicationJSONObject;
        return this;
    }
    public PutBilling403ApplicationJson putBilling403ApplicationJSONObject;
    public PutBillingResponse withPutBilling403ApplicationJsonObject(PutBilling403ApplicationJson putBilling403ApplicationJSONObject) {
        this.putBilling403ApplicationJSONObject = putBilling403ApplicationJSONObject;
        return this;
    }
}
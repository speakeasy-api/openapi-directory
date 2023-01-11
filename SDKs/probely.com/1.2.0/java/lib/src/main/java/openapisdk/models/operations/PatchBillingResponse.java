package openapisdk.models.operations;



public class PatchBillingResponse {
    public openapisdk.models.shared.Billing billing;
    public PatchBillingResponse withBilling(openapisdk.models.shared.Billing billing) {
        this.billing = billing;
        return this;
    }
    public String contentType;
    public PatchBillingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchBillingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchBilling401ApplicationJson patchBilling401ApplicationJSONObject;
    public PatchBillingResponse withPatchBilling401ApplicationJsonObject(PatchBilling401ApplicationJson patchBilling401ApplicationJSONObject) {
        this.patchBilling401ApplicationJSONObject = patchBilling401ApplicationJSONObject;
        return this;
    }
    public PatchBilling403ApplicationJson patchBilling403ApplicationJSONObject;
    public PatchBillingResponse withPatchBilling403ApplicationJsonObject(PatchBilling403ApplicationJson patchBilling403ApplicationJSONObject) {
        this.patchBilling403ApplicationJSONObject = patchBilling403ApplicationJSONObject;
        return this;
    }
}
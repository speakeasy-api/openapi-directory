package openapisdk.models.operations;



public class CreateUsageChargeResponse {
    public String contentType;
    public CreateUsageChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUsageChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateUsageCharge201ApplicationJson createUsageCharge201ApplicationJSONObject;
    public CreateUsageChargeResponse withCreateUsageCharge201ApplicationJsonObject(CreateUsageCharge201ApplicationJson createUsageCharge201ApplicationJSONObject) {
        this.createUsageCharge201ApplicationJSONObject = createUsageCharge201ApplicationJSONObject;
        return this;
    }
}
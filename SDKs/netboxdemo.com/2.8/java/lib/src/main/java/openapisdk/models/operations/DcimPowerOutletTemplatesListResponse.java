package openapisdk.models.operations;



public class DcimPowerOutletTemplatesListResponse {
    public String contentType;
    public DcimPowerOutletTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerOutletTemplatesList200ApplicationJson dcimPowerOutletTemplatesList200ApplicationJSONObject;
    public DcimPowerOutletTemplatesListResponse withDcimPowerOutletTemplatesList200ApplicationJsonObject(DcimPowerOutletTemplatesList200ApplicationJson dcimPowerOutletTemplatesList200ApplicationJSONObject) {
        this.dcimPowerOutletTemplatesList200ApplicationJSONObject = dcimPowerOutletTemplatesList200ApplicationJSONObject;
        return this;
    }
}
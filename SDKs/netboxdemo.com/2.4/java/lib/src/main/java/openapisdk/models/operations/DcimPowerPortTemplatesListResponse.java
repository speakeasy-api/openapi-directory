package openapisdk.models.operations;



public class DcimPowerPortTemplatesListResponse {
    public String contentType;
    public DcimPowerPortTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerPortTemplatesList200ApplicationJson dcimPowerPortTemplatesList200ApplicationJSONObject;
    public DcimPowerPortTemplatesListResponse withDcimPowerPortTemplatesList200ApplicationJsonObject(DcimPowerPortTemplatesList200ApplicationJson dcimPowerPortTemplatesList200ApplicationJSONObject) {
        this.dcimPowerPortTemplatesList200ApplicationJSONObject = dcimPowerPortTemplatesList200ApplicationJSONObject;
        return this;
    }
}
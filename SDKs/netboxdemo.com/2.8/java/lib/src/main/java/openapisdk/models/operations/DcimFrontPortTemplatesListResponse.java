package openapisdk.models.operations;



public class DcimFrontPortTemplatesListResponse {
    public String contentType;
    public DcimFrontPortTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimFrontPortTemplatesList200ApplicationJson dcimFrontPortTemplatesList200ApplicationJSONObject;
    public DcimFrontPortTemplatesListResponse withDcimFrontPortTemplatesList200ApplicationJsonObject(DcimFrontPortTemplatesList200ApplicationJson dcimFrontPortTemplatesList200ApplicationJSONObject) {
        this.dcimFrontPortTemplatesList200ApplicationJSONObject = dcimFrontPortTemplatesList200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimConsoleServerPortTemplatesListResponse {
    public String contentType;
    public DcimConsoleServerPortTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimConsoleServerPortTemplatesList200ApplicationJson dcimConsoleServerPortTemplatesList200ApplicationJSONObject;
    public DcimConsoleServerPortTemplatesListResponse withDcimConsoleServerPortTemplatesList200ApplicationJsonObject(DcimConsoleServerPortTemplatesList200ApplicationJson dcimConsoleServerPortTemplatesList200ApplicationJSONObject) {
        this.dcimConsoleServerPortTemplatesList200ApplicationJSONObject = dcimConsoleServerPortTemplatesList200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimPowerOutletTemplatesReadResponse {
    public String contentType;
    public DcimPowerOutletTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate;
    public DcimPowerOutletTemplatesReadResponse withPowerOutletTemplate(openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate) {
        this.powerOutletTemplate = powerOutletTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
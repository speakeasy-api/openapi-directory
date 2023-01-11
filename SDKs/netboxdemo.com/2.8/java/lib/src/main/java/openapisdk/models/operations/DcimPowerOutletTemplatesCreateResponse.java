package openapisdk.models.operations;



public class DcimPowerOutletTemplatesCreateResponse {
    public String contentType;
    public DcimPowerOutletTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate;
    public DcimPowerOutletTemplatesCreateResponse withPowerOutletTemplate(openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate) {
        this.powerOutletTemplate = powerOutletTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
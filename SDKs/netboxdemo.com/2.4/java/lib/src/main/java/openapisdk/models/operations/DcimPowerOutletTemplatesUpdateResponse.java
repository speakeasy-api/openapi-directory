package openapisdk.models.operations;



public class DcimPowerOutletTemplatesUpdateResponse {
    public String contentType;
    public DcimPowerOutletTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate;
    public DcimPowerOutletTemplatesUpdateResponse withPowerOutletTemplate(openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate) {
        this.powerOutletTemplate = powerOutletTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimPowerOutletTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimPowerOutletTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate;
    public DcimPowerOutletTemplatesPartialUpdateResponse withPowerOutletTemplate(openapisdk.models.shared.PowerOutletTemplate powerOutletTemplate) {
        this.powerOutletTemplate = powerOutletTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
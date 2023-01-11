package openapisdk.models.operations;



public class DcimPowerPortTemplatesCreateResponse {
    public String contentType;
    public DcimPowerPortTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPortTemplate powerPortTemplate;
    public DcimPowerPortTemplatesCreateResponse withPowerPortTemplate(openapisdk.models.shared.PowerPortTemplate powerPortTemplate) {
        this.powerPortTemplate = powerPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
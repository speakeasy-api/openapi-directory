package openapisdk.models.operations;



public class DcimPowerPortTemplatesUpdateResponse {
    public String contentType;
    public DcimPowerPortTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPortTemplate powerPortTemplate;
    public DcimPowerPortTemplatesUpdateResponse withPowerPortTemplate(openapisdk.models.shared.PowerPortTemplate powerPortTemplate) {
        this.powerPortTemplate = powerPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimPowerPortTemplatesReadResponse {
    public String contentType;
    public DcimPowerPortTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPortTemplate powerPortTemplate;
    public DcimPowerPortTemplatesReadResponse withPowerPortTemplate(openapisdk.models.shared.PowerPortTemplate powerPortTemplate) {
        this.powerPortTemplate = powerPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
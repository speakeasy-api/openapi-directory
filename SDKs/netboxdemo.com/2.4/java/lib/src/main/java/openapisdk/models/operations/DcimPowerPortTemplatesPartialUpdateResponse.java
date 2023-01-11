package openapisdk.models.operations;



public class DcimPowerPortTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimPowerPortTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPortTemplate powerPortTemplate;
    public DcimPowerPortTemplatesPartialUpdateResponse withPowerPortTemplate(openapisdk.models.shared.PowerPortTemplate powerPortTemplate) {
        this.powerPortTemplate = powerPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
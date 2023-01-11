package openapisdk.models.operations;



public class DcimRearPortTemplatesCreateResponse {
    public String contentType;
    public DcimRearPortTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPortTemplate rearPortTemplate;
    public DcimRearPortTemplatesCreateResponse withRearPortTemplate(openapisdk.models.shared.RearPortTemplate rearPortTemplate) {
        this.rearPortTemplate = rearPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimRearPortTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
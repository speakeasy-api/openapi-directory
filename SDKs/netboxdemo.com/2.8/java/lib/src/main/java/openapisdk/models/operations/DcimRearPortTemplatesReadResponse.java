package openapisdk.models.operations;



public class DcimRearPortTemplatesReadResponse {
    public String contentType;
    public DcimRearPortTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPortTemplate rearPortTemplate;
    public DcimRearPortTemplatesReadResponse withRearPortTemplate(openapisdk.models.shared.RearPortTemplate rearPortTemplate) {
        this.rearPortTemplate = rearPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimRearPortTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimRearPortTemplatesUpdateResponse {
    public String contentType;
    public DcimRearPortTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPortTemplate rearPortTemplate;
    public DcimRearPortTemplatesUpdateResponse withRearPortTemplate(openapisdk.models.shared.RearPortTemplate rearPortTemplate) {
        this.rearPortTemplate = rearPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimRearPortTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
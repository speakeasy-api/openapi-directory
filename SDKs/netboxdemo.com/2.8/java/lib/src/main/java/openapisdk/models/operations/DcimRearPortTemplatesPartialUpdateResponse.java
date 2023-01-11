package openapisdk.models.operations;



public class DcimRearPortTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimRearPortTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPortTemplate rearPortTemplate;
    public DcimRearPortTemplatesPartialUpdateResponse withRearPortTemplate(openapisdk.models.shared.RearPortTemplate rearPortTemplate) {
        this.rearPortTemplate = rearPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimRearPortTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class DcimFrontPortTemplatesUpdateResponse {
    public String contentType;
    public DcimFrontPortTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPortTemplate frontPortTemplate;
    public DcimFrontPortTemplatesUpdateResponse withFrontPortTemplate(openapisdk.models.shared.FrontPortTemplate frontPortTemplate) {
        this.frontPortTemplate = frontPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
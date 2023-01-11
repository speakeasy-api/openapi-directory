package openapisdk.models.operations;



public class DcimFrontPortTemplatesReadResponse {
    public String contentType;
    public DcimFrontPortTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPortTemplate frontPortTemplate;
    public DcimFrontPortTemplatesReadResponse withFrontPortTemplate(openapisdk.models.shared.FrontPortTemplate frontPortTemplate) {
        this.frontPortTemplate = frontPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
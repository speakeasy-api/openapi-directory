package openapisdk.models.operations;



public class DcimFrontPortTemplatesCreateResponse {
    public String contentType;
    public DcimFrontPortTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPortTemplate frontPortTemplate;
    public DcimFrontPortTemplatesCreateResponse withFrontPortTemplate(openapisdk.models.shared.FrontPortTemplate frontPortTemplate) {
        this.frontPortTemplate = frontPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
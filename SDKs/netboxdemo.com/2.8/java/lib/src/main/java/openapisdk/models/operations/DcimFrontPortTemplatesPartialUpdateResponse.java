package openapisdk.models.operations;



public class DcimFrontPortTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimFrontPortTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPortTemplate frontPortTemplate;
    public DcimFrontPortTemplatesPartialUpdateResponse withFrontPortTemplate(openapisdk.models.shared.FrontPortTemplate frontPortTemplate) {
        this.frontPortTemplate = frontPortTemplate;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
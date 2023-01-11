package openapisdk.models.operations;



public class DcimInterfaceTemplatesCreateResponse {
    public String contentType;
    public DcimInterfaceTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceTemplate interfaceTemplate;
    public DcimInterfaceTemplatesCreateResponse withInterfaceTemplate(openapisdk.models.shared.InterfaceTemplate interfaceTemplate) {
        this.interfaceTemplate = interfaceTemplate;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
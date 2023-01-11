package openapisdk.models.operations;



public class DcimInterfaceTemplatesReadResponse {
    public String contentType;
    public DcimInterfaceTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceTemplate interfaceTemplate;
    public DcimInterfaceTemplatesReadResponse withInterfaceTemplate(openapisdk.models.shared.InterfaceTemplate interfaceTemplate) {
        this.interfaceTemplate = interfaceTemplate;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
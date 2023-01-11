package openapisdk.models.operations;



public class DcimInterfaceTemplatesUpdateResponse {
    public String contentType;
    public DcimInterfaceTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceTemplate interfaceTemplate;
    public DcimInterfaceTemplatesUpdateResponse withInterfaceTemplate(openapisdk.models.shared.InterfaceTemplate interfaceTemplate) {
        this.interfaceTemplate = interfaceTemplate;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
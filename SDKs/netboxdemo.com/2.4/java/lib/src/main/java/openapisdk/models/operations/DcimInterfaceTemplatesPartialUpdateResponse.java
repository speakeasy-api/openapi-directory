package openapisdk.models.operations;



public class DcimInterfaceTemplatesPartialUpdateResponse {
    public String contentType;
    public DcimInterfaceTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceTemplate interfaceTemplate;
    public DcimInterfaceTemplatesPartialUpdateResponse withInterfaceTemplate(openapisdk.models.shared.InterfaceTemplate interfaceTemplate) {
        this.interfaceTemplate = interfaceTemplate;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
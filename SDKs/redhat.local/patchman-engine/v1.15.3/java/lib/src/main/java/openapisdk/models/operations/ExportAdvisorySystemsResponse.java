package openapisdk.models.operations;



public class ExportAdvisorySystemsResponse {
    public byte[] body;
    public ExportAdvisorySystemsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportAdvisorySystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAdvisorySystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemInlineItem[] controllersSystemInlineItems;
    public ExportAdvisorySystemsResponse withControllersSystemInlineItems(openapisdk.models.shared.ControllersSystemInlineItem[] controllersSystemInlineItems) {
        this.controllersSystemInlineItems = controllersSystemInlineItems;
        return this;
    }
}
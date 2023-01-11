package openapisdk.models.operations;



public class ExportSystemsResponse {
    public byte[] body;
    public ExportSystemsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemInlineItem[] controllersSystemInlineItems;
    public ExportSystemsResponse withControllersSystemInlineItems(openapisdk.models.shared.ControllersSystemInlineItem[] controllersSystemInlineItems) {
        this.controllersSystemInlineItems = controllersSystemInlineItems;
        return this;
    }
}
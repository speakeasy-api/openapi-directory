package openapisdk.models.operations;



public class ExportAdvisoriesResponse {
    public byte[] body;
    public ExportAdvisoriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportAdvisoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAdvisoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersAdvisoryInlineItem[] controllersAdvisoryInlineItems;
    public ExportAdvisoriesResponse withControllersAdvisoryInlineItems(openapisdk.models.shared.ControllersAdvisoryInlineItem[] controllersAdvisoryInlineItems) {
        this.controllersAdvisoryInlineItems = controllersAdvisoryInlineItems;
        return this;
    }
}
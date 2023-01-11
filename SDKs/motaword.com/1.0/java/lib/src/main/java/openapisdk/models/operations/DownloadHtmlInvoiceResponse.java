package openapisdk.models.operations;



public class DownloadHtmlInvoiceResponse {
    public String contentType;
    public DownloadHtmlInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadHtmlInvoiceResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadHtmlInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadHTMLInvoice200TextHTMLString;
    public DownloadHtmlInvoiceResponse withDownloadHtmlInvoice200TextHtmlString(String downloadHTMLInvoice200TextHTMLString) {
        this.downloadHTMLInvoice200TextHTMLString = downloadHTMLInvoice200TextHTMLString;
        return this;
    }
}
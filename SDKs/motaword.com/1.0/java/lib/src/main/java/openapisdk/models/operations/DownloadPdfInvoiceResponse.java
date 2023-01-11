package openapisdk.models.operations;



public class DownloadPdfInvoiceResponse {
    public String contentType;
    public DownloadPdfInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadPdfInvoiceResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadPdfInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] downloadPdfInvoice200ApplicationPdfBinaryString;
    public DownloadPdfInvoiceResponse withDownloadPdfInvoice200ApplicationPdfBinaryString(byte[] downloadPdfInvoice200ApplicationPdfBinaryString) {
        this.downloadPdfInvoice200ApplicationPdfBinaryString = downloadPdfInvoice200ApplicationPdfBinaryString;
        return this;
    }
}
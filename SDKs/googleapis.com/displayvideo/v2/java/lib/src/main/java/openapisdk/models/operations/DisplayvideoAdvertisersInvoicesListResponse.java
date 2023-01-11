package openapisdk.models.operations;



public class DisplayvideoAdvertisersInvoicesListResponse {
    public String contentType;
    public DisplayvideoAdvertisersInvoicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInvoicesResponse listInvoicesResponse;
    public DisplayvideoAdvertisersInvoicesListResponse withListInvoicesResponse(openapisdk.models.shared.ListInvoicesResponse listInvoicesResponse) {
        this.listInvoicesResponse = listInvoicesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInvoicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
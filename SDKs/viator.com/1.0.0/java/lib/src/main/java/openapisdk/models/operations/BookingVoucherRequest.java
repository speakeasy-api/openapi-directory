package openapisdk.models.operations;



public class BookingVoucherRequest {
    public BookingVoucherQueryParams queryParams;
    public BookingVoucherRequest withQueryParams(BookingVoucherQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BookingVoucherHeaders headers;
    public BookingVoucherRequest withHeaders(BookingVoucherHeaders headers) {
        this.headers = headers;
        return this;
    }
}
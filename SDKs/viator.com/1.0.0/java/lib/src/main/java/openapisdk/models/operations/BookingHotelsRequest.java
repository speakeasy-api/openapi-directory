package openapisdk.models.operations;



public class BookingHotelsRequest {
    public BookingHotelsQueryParams queryParams;
    public BookingHotelsRequest withQueryParams(BookingHotelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BookingHotelsHeaders headers;
    public BookingHotelsRequest withHeaders(BookingHotelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}
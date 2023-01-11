package openapisdk.models.operations;



public class BookingMybookingsRequest {
    public BookingMybookingsQueryParams queryParams;
    public BookingMybookingsRequest withQueryParams(BookingMybookingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BookingMybookingsHeaders headers;
    public BookingMybookingsRequest withHeaders(BookingMybookingsHeaders headers) {
        this.headers = headers;
        return this;
    }
}
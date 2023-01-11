package openapisdk.models.operations;



public class GetConsumerV1CustomersBookingfieldsResponse {
    public openapisdk.models.shared.BookingFieldListViewModel bookingFieldListViewModel;
    public GetConsumerV1CustomersBookingfieldsResponse withBookingFieldListViewModel(openapisdk.models.shared.BookingFieldListViewModel bookingFieldListViewModel) {
        this.bookingFieldListViewModel = bookingFieldListViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1CustomersBookingfieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersBookingfieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
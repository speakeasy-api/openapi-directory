package openapisdk.models.operations;



public class GetConsumerV1AppointmentsBookingfieldsResponse {
    public openapisdk.models.shared.BookingFieldListViewModel bookingFieldListViewModel;
    public GetConsumerV1AppointmentsBookingfieldsResponse withBookingFieldListViewModel(openapisdk.models.shared.BookingFieldListViewModel bookingFieldListViewModel) {
        this.bookingFieldListViewModel = bookingFieldListViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AppointmentsBookingfieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AppointmentsBookingfieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
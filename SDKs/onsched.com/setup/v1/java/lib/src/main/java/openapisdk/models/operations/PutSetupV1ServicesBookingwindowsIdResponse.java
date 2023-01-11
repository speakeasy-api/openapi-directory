package openapisdk.models.operations;



public class PutSetupV1ServicesBookingwindowsIdResponse {
    public openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel;
    public PutSetupV1ServicesBookingwindowsIdResponse withBookingWindowViewModel(openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel) {
        this.bookingWindowViewModel = bookingWindowViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1ServicesBookingwindowsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ServicesBookingwindowsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
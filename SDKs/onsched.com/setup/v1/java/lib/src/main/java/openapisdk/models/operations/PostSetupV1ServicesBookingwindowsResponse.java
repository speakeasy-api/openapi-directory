package openapisdk.models.operations;



public class PostSetupV1ServicesBookingwindowsResponse {
    public openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel;
    public PostSetupV1ServicesBookingwindowsResponse withBookingWindowViewModel(openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel) {
        this.bookingWindowViewModel = bookingWindowViewModel;
        return this;
    }
    public String contentType;
    public PostSetupV1ServicesBookingwindowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesBookingwindowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
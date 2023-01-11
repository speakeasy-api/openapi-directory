package openapisdk.models.operations;



public class GetSetupV1ServicesIdBookingwindowsResponse {
    public openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel;
    public GetSetupV1ServicesIdBookingwindowsResponse withBookingWindowViewModel(openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel) {
        this.bookingWindowViewModel = bookingWindowViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1ServicesIdBookingwindowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesIdBookingwindowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class GetSetupV1ServicesBookingwindowsIdResponse {
    public openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel;
    public GetSetupV1ServicesBookingwindowsIdResponse withBookingWindowViewModel(openapisdk.models.shared.BookingWindowViewModel bookingWindowViewModel) {
        this.bookingWindowViewModel = bookingWindowViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1ServicesBookingwindowsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesBookingwindowsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.operations;



public class BookingAvailabilityResponse {
    public String contentType;
    public BookingAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingAvailability200ApplicationJson bookingAvailability200ApplicationJSONObject;
    public BookingAvailabilityResponse withBookingAvailability200ApplicationJsonObject(BookingAvailability200ApplicationJson bookingAvailability200ApplicationJSONObject) {
        this.bookingAvailability200ApplicationJSONObject = bookingAvailability200ApplicationJSONObject;
        return this;
    }
}
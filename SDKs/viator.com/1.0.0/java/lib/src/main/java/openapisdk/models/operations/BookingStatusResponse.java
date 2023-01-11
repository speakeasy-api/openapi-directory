package openapisdk.models.operations;



public class BookingStatusResponse {
    public String contentType;
    public BookingStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingStatus200ApplicationJson bookingStatus200ApplicationJSONObject;
    public BookingStatusResponse withBookingStatus200ApplicationJsonObject(BookingStatus200ApplicationJson bookingStatus200ApplicationJSONObject) {
        this.bookingStatus200ApplicationJSONObject = bookingStatus200ApplicationJSONObject;
        return this;
    }
}
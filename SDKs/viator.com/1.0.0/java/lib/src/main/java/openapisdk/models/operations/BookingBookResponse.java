package openapisdk.models.operations;



public class BookingBookResponse {
    public String contentType;
    public BookingBookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingBookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingBook200ApplicationJson bookingBook200ApplicationJSONObject;
    public BookingBookResponse withBookingBook200ApplicationJsonObject(BookingBook200ApplicationJson bookingBook200ApplicationJSONObject) {
        this.bookingBook200ApplicationJSONObject = bookingBook200ApplicationJSONObject;
        return this;
    }
}
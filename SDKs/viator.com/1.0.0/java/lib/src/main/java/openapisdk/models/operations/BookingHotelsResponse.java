package openapisdk.models.operations;



public class BookingHotelsResponse {
    public String contentType;
    public BookingHotelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingHotelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingHotels200ApplicationJson bookingHotels200ApplicationJSONObject;
    public BookingHotelsResponse withBookingHotels200ApplicationJsonObject(BookingHotels200ApplicationJson bookingHotels200ApplicationJSONObject) {
        this.bookingHotels200ApplicationJSONObject = bookingHotels200ApplicationJSONObject;
        return this;
    }
}
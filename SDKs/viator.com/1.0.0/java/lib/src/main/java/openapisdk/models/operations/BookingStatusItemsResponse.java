package openapisdk.models.operations;



public class BookingStatusItemsResponse {
    public String contentType;
    public BookingStatusItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingStatusItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingStatusItems200ApplicationJson bookingStatusItems200ApplicationJSONObject;
    public BookingStatusItemsResponse withBookingStatusItems200ApplicationJsonObject(BookingStatusItems200ApplicationJson bookingStatusItems200ApplicationJSONObject) {
        this.bookingStatusItems200ApplicationJSONObject = bookingStatusItems200ApplicationJSONObject;
        return this;
    }
}
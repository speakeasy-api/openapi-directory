package openapisdk.models.operations;



public class BookingPastbookingResponse {
    public String contentType;
    public BookingPastbookingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingPastbookingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingPastbooking200ApplicationJson bookingPastbooking200ApplicationJSONObject;
    public BookingPastbookingResponse withBookingPastbooking200ApplicationJsonObject(BookingPastbooking200ApplicationJson bookingPastbooking200ApplicationJSONObject) {
        this.bookingPastbooking200ApplicationJSONObject = bookingPastbooking200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class BookingMybookingsResponse {
    public String contentType;
    public BookingMybookingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingMybookingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingMybookings200ApplicationJson bookingMybookings200ApplicationJSONObject;
    public BookingMybookingsResponse withBookingMybookings200ApplicationJsonObject(BookingMybookings200ApplicationJson bookingMybookings200ApplicationJSONObject) {
        this.bookingMybookings200ApplicationJSONObject = bookingMybookings200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class BookingCalculatepriceResponse {
    public String contentType;
    public BookingCalculatepriceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingCalculatepriceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingCalculateprice200ApplicationJson bookingCalculateprice200ApplicationJSONObject;
    public BookingCalculatepriceResponse withBookingCalculateprice200ApplicationJsonObject(BookingCalculateprice200ApplicationJson bookingCalculateprice200ApplicationJSONObject) {
        this.bookingCalculateprice200ApplicationJSONObject = bookingCalculateprice200ApplicationJSONObject;
        return this;
    }
}
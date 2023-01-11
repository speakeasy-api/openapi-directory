package openapisdk.models.operations;



public class BookingPricingmatrixResponse {
    public String contentType;
    public BookingPricingmatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingPricingmatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingPricingmatrix200ApplicationJson bookingPricingmatrix200ApplicationJSONObject;
    public BookingPricingmatrixResponse withBookingPricingmatrix200ApplicationJsonObject(BookingPricingmatrix200ApplicationJson bookingPricingmatrix200ApplicationJSONObject) {
        this.bookingPricingmatrix200ApplicationJSONObject = bookingPricingmatrix200ApplicationJSONObject;
        return this;
    }
}
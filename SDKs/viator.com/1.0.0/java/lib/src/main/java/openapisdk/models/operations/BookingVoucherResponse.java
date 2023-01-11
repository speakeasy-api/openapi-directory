package openapisdk.models.operations;



public class BookingVoucherResponse {
    public String contentType;
    public BookingVoucherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingVoucherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingVoucher200ApplicationJson bookingVoucher200ApplicationJSONObject;
    public BookingVoucherResponse withBookingVoucher200ApplicationJsonObject(BookingVoucher200ApplicationJson bookingVoucher200ApplicationJSONObject) {
        this.bookingVoucher200ApplicationJSONObject = bookingVoucher200ApplicationJSONObject;
        return this;
    }
}
package openapisdk.models.operations;



public class BookingAvailabilityDatesResponse {
    public String contentType;
    public BookingAvailabilityDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BookingAvailabilityDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BookingAvailabilityDates200ApplicationJson bookingAvailabilityDates200ApplicationJSONObject;
    public BookingAvailabilityDatesResponse withBookingAvailabilityDates200ApplicationJsonObject(BookingAvailabilityDates200ApplicationJson bookingAvailabilityDates200ApplicationJSONObject) {
        this.bookingAvailabilityDates200ApplicationJSONObject = bookingAvailabilityDates200ApplicationJSONObject;
        return this;
    }
}
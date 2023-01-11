package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelBookingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=booking-reference")
    public String bookingReference;
    public CancelBookingPathParams withBookingReference(String bookingReference) {
        this.bookingReference = bookingReference;
        return this;
    }
}
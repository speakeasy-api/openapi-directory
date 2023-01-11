package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelBookingQuotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=booking-reference")
    public String bookingReference;
    public CancelBookingQuotePathParams withBookingReference(String bookingReference) {
        this.bookingReference = bookingReference;
        return this;
    }
}
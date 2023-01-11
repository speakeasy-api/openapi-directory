package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ServicesBookingwindowsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel;
    public PutSetupV1ServicesBookingwindowsIdRequests withBookingWindowUpdateModel(openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel) {
        this.bookingWindowUpdateModel = bookingWindowUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel1;
    public PutSetupV1ServicesBookingwindowsIdRequests withBookingWindowUpdateModel1(openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel1) {
        this.bookingWindowUpdateModel1 = bookingWindowUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel2;
    public PutSetupV1ServicesBookingwindowsIdRequests withBookingWindowUpdateModel2(openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel2) {
        this.bookingWindowUpdateModel2 = bookingWindowUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel3;
    public PutSetupV1ServicesBookingwindowsIdRequests withBookingWindowUpdateModel3(openapisdk.models.shared.BookingWindowUpdateModel bookingWindowUpdateModel3) {
        this.bookingWindowUpdateModel3 = bookingWindowUpdateModel3;
        return this;
    }
}
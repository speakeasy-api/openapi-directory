package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesBookingwindowsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel;
    public PostSetupV1ServicesBookingwindowsRequests withBookingWindowInputModel(openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel) {
        this.bookingWindowInputModel = bookingWindowInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel1;
    public PostSetupV1ServicesBookingwindowsRequests withBookingWindowInputModel1(openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel1) {
        this.bookingWindowInputModel1 = bookingWindowInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel2;
    public PostSetupV1ServicesBookingwindowsRequests withBookingWindowInputModel2(openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel2) {
        this.bookingWindowInputModel2 = bookingWindowInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel3;
    public PostSetupV1ServicesBookingwindowsRequests withBookingWindowInputModel3(openapisdk.models.shared.BookingWindowInputModel bookingWindowInputModel3) {
        this.bookingWindowInputModel3 = bookingWindowInputModel3;
        return this;
    }
}
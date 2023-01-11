package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityTourgradesPricingmatrixHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingAvailabilityTourgradesPricingmatrixHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
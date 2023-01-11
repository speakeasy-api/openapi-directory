package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityTourgradesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingAvailabilityTourgradesHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
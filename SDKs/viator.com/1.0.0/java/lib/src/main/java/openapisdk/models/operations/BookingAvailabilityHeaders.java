package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingAvailabilityHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
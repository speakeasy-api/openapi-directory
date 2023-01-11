package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingCalculatepriceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingCalculatepriceHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
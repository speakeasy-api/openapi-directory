package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingStatusItemsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingStatusItemsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
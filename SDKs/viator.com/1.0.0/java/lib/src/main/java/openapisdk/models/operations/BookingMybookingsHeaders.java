package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingMybookingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingMybookingsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
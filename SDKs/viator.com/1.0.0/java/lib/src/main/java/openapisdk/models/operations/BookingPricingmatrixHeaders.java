package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingPricingmatrixHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingPricingmatrixHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
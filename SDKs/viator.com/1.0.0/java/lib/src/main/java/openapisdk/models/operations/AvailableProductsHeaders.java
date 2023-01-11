package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvailableProductsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public AvailableProductsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
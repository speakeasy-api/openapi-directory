package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public ProductHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
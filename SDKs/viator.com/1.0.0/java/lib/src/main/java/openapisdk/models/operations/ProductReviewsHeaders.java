package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductReviewsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public ProductReviewsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomyDestinationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public TaxonomyDestinationsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}
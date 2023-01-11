package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllTaxRatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Product_code")
    public String productCode;
    public AllTaxRatesQueryParams withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public AllTaxRatesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public AllTaxRatesQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public AllTaxRatesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}
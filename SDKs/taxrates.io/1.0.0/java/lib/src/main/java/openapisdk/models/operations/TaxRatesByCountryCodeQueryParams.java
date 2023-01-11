package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxRatesByCountryCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_code")
    public String countryCode;
    public TaxRatesByCountryCodeQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public TaxRatesByCountryCodeQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public TaxRatesByCountryCodeQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public TaxRatesByCountryCodeQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_codes[]")
    public String productCodes;
    public TaxRatesByCountryCodeQueryParams withProductCodes(String productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=province ")
    public String province;
    public TaxRatesByCountryCodeQueryParams withProvince(String province) {
        this.province = province;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public TaxRatesByCountryCodeQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
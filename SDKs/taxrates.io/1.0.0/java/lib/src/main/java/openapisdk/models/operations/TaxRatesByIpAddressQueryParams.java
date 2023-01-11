package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxRatesByIpAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public TaxRatesByIpAddressQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public TaxRatesByIpAddressQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public TaxRatesByIpAddressQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_code")
    public String productCode;
    public TaxRatesByIpAddressQueryParams withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public TaxRatesByIpAddressQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
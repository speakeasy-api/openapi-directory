package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertcurrencyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public String amount;
    public ConvertcurrencyQueryParams withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public ConvertcurrencyQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public ConvertcurrencyQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public ConvertcurrencyQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}
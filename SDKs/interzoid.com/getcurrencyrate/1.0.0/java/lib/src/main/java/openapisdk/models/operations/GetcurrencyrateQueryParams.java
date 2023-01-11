package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetcurrencyrateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetcurrencyrateQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=symbol")
    public String symbol;
    public GetcurrencyrateQueryParams withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ThreeGetEstimatedPriceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public String amount;
    public ThreeGetEstimatedPriceQueryParams withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency_from")
    public String currencyFrom;
    public ThreeGetEstimatedPriceQueryParams withCurrencyFrom(String currencyFrom) {
        this.currencyFrom = currencyFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency_to")
    public String currencyTo;
    public ThreeGetEstimatedPriceQueryParams withCurrencyTo(String currencyTo) {
        this.currencyTo = currencyTo;
        return this;
    }
}
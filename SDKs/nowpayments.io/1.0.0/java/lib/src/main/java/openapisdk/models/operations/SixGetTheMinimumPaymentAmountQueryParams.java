package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SixGetTheMinimumPaymentAmountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency_from")
    public String currencyFrom;
    public SixGetTheMinimumPaymentAmountQueryParams withCurrencyFrom(String currencyFrom) {
        this.currencyFrom = currencyFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency_to")
    public String currencyTo;
    public SixGetTheMinimumPaymentAmountQueryParams withCurrencyTo(String currencyTo) {
        this.currencyTo = currencyTo;
        return this;
    }
}
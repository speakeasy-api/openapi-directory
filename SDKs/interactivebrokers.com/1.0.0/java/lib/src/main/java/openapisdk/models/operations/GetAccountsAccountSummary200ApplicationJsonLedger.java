package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountSummary200ApplicationJsonLedger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CashBalance")
    public Double cashBalance;
    public GetAccountsAccountSummary200ApplicationJsonLedger withCashBalance(Double cashBalance) {
        this.cashBalance = cashBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CashBalanceFXSegment")
    public Double cashBalanceFXSegment;
    public GetAccountsAccountSummary200ApplicationJsonLedger withCashBalanceFxSegment(Double cashBalanceFXSegment) {
        this.cashBalanceFXSegment = cashBalanceFXSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CashCumQty")
    public Double cashCumQty;
    public GetAccountsAccountSummary200ApplicationJsonLedger withCashCumQty(Double cashCumQty) {
        this.cashCumQty = cashCumQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public GetAccountsAccountSummary200ApplicationJsonLedger withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FutureOptionMarketValue")
    public Double futureOptionMarketValue;
    public GetAccountsAccountSummary200ApplicationJsonLedger withFutureOptionMarketValue(Double futureOptionMarketValue) {
        this.futureOptionMarketValue = futureOptionMarketValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FuturePNL")
    public Double futurePNL;
    public GetAccountsAccountSummary200ApplicationJsonLedger withFuturePnl(Double futurePNL) {
        this.futurePNL = futurePNL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetDividend")
    public Double netDividend;
    public GetAccountsAccountSummary200ApplicationJsonLedger withNetDividend(Double netDividend) {
        this.netDividend = netDividend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetInterest")
    public Double netInterest;
    public GetAccountsAccountSummary200ApplicationJsonLedger withNetInterest(Double netInterest) {
        this.netInterest = netInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetLiquidation")
    public Double netLiquidation;
    public GetAccountsAccountSummary200ApplicationJsonLedger withNetLiquidation(Double netLiquidation) {
        this.netLiquidation = netLiquidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionMarketValue")
    public Double optionMarketValue;
    public GetAccountsAccountSummary200ApplicationJsonLedger withOptionMarketValue(Double optionMarketValue) {
        this.optionMarketValue = optionMarketValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RealizedPNL")
    public Double realizedPNL;
    public GetAccountsAccountSummary200ApplicationJsonLedger withRealizedPnl(Double realizedPNL) {
        this.realizedPNL = realizedPNL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StockMarketValue")
    public Double stockMarketValue;
    public GetAccountsAccountSummary200ApplicationJsonLedger withStockMarketValue(Double stockMarketValue) {
        this.stockMarketValue = stockMarketValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCashBalance")
    public Double totalCashBalance;
    public GetAccountsAccountSummary200ApplicationJsonLedger withTotalCashBalance(Double totalCashBalance) {
        this.totalCashBalance = totalCashBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnrealizedPNL")
    public Double unrealizedPNL;
    public GetAccountsAccountSummary200ApplicationJsonLedger withUnrealizedPnl(Double unrealizedPNL) {
        this.unrealizedPNL = unrealizedPNL;
        return this;
    }
}
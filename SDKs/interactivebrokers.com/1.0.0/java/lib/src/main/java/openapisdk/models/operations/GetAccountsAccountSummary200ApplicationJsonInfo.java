package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountSummary200ApplicationJsonInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountCode")
    public String accountCode;
    public GetAccountsAccountSummary200ApplicationJsonInfo withAccountCode(String accountCode) {
        this.accountCode = accountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountReady")
    public String accountReady;
    public GetAccountsAccountSummary200ApplicationJsonInfo withAccountReady(String accountReady) {
        this.accountReady = accountReady;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountType")
    public String accountType;
    public GetAccountsAccountSummary200ApplicationJsonInfo withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cushion")
    public String cushion;
    public GetAccountsAccountSummary200ApplicationJsonInfo withCushion(String cushion) {
        this.cushion = cushion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayTradesRemaining")
    public String dayTradesRemaining;
    public GetAccountsAccountSummary200ApplicationJsonInfo withDayTradesRemaining(String dayTradesRemaining) {
        this.dayTradesRemaining = dayTradesRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayTradesRemainingT")
    public String dayTradesRemainingT;
    public GetAccountsAccountSummary200ApplicationJsonInfo withDayTradesRemainingT(String dayTradesRemainingT) {
        this.dayTradesRemainingT = dayTradesRemainingT;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayTradesRemainingT+2")
    public String dayTradesRemainingTPlus2;
    public GetAccountsAccountSummary200ApplicationJsonInfo withDayTradesRemainingTPlus2(String dayTradesRemainingTPlus2) {
        this.dayTradesRemainingTPlus2 = dayTradesRemainingTPlus2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayTradesRemainingT+3")
    public String dayTradesRemainingTPlus3;
    public GetAccountsAccountSummary200ApplicationJsonInfo withDayTradesRemainingTPlus3(String dayTradesRemainingTPlus3) {
        this.dayTradesRemainingTPlus3 = dayTradesRemainingTPlus3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayTradesRemainingT+4")
    public String dayTradesRemainingTPlus4;
    public GetAccountsAccountSummary200ApplicationJsonInfo withDayTradesRemainingTPlus4(String dayTradesRemainingTPlus4) {
        this.dayTradesRemainingTPlus4 = dayTradesRemainingTPlus4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HighestSeverity")
    public String highestSeverity;
    public GetAccountsAccountSummary200ApplicationJsonInfo withHighestSeverity(String highestSeverity) {
        this.highestSeverity = highestSeverity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Leverage-S")
    public String leverageS;
    public GetAccountsAccountSummary200ApplicationJsonInfo withLeverageS(String leverageS) {
        this.leverageS = leverageS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LookAheadNextChange")
    public String lookAheadNextChange;
    public GetAccountsAccountSummary200ApplicationJsonInfo withLookAheadNextChange(String lookAheadNextChange) {
        this.lookAheadNextChange = lookAheadNextChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentTitle-C")
    public String segmentTitleC;
    public GetAccountsAccountSummary200ApplicationJsonInfo withSegmentTitleC(String segmentTitleC) {
        this.segmentTitleC = segmentTitleC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentTitle-S")
    public String segmentTitleS;
    public GetAccountsAccountSummary200ApplicationJsonInfo withSegmentTitleS(String segmentTitleS) {
        this.segmentTitleS = segmentTitleS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TradingType-S")
    public String tradingTypeS;
    public GetAccountsAccountSummary200ApplicationJsonInfo withTradingTypeS(String tradingTypeS) {
        this.tradingTypeS = tradingTypeS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WhatIfPMEnabled")
    public String whatIfPMEnabled;
    public GetAccountsAccountSummary200ApplicationJsonInfo withWhatIfPmEnabled(String whatIfPMEnabled) {
        this.whatIfPMEnabled = whatIfPMEnabled;
        return this;
    }
}
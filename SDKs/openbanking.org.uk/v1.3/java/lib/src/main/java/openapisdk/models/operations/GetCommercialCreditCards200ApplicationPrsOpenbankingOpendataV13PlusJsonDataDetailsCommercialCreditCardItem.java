package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem
 * Commercial Credit Card Item 
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem {
    @JsonProperty("APRRate")
    public String aprRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAprRate(String aprRate) {
        this.aprRate = aprRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbilityToSetIndividualLimits")
    public Boolean abilityToSetIndividualLimits;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAbilityToSetIndividualLimits(Boolean abilityToSetIndividualLimits) {
        this.abilityToSetIndividualLimits = abilityToSetIndividualLimits;
        return this;
    }
    @JsonProperty("AccessToOnlineDataReportingTool")
    public Boolean accessToOnlineDataReportingTool;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAccessToOnlineDataReportingTool(Boolean accessToOnlineDataReportingTool) {
        this.accessToOnlineDataReportingTool = accessToOnlineDataReportingTool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocationofRepayment")
    public String allocationofRepayment;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAllocationofRepayment(String allocationofRepayment) {
        this.allocationofRepayment = allocationofRepayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualAccountFeeType")
    public String annualAccountFeeType;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAnnualAccountFeeType(String annualAccountFeeType) {
        this.annualAccountFeeType = annualAccountFeeType;
        return this;
    }
    @JsonProperty("AnnualFeeAmount")
    public String annualFeeAmount;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withAnnualFeeAmount(String annualFeeAmount) {
        this.annualFeeAmount = annualFeeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BalanceTransferInterestRatePeriod")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum balanceTransferInterestRatePeriod;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withBalanceTransferInterestRatePeriod(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum balanceTransferInterestRatePeriod) {
        this.balanceTransferInterestRatePeriod = balanceTransferInterestRatePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BalanceTransferRate")
    public String balanceTransferRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withBalanceTransferRate(String balanceTransferRate) {
        this.balanceTransferRate = balanceTransferRate;
        return this;
    }
    @JsonProperty("CardScheme")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum cardScheme;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withCardScheme(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum cardScheme) {
        this.cardScheme = cardScheme;
        return this;
    }
    @JsonProperty("CashAdvanceRate")
    public String cashAdvanceRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withCashAdvanceRate(String cashAdvanceRate) {
        this.cashAdvanceRate = cashAdvanceRate;
        return this;
    }
    @JsonProperty("CashWithdrawalsAllowed")
    public Boolean cashWithdrawalsAllowed;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withCashWithdrawalsAllowed(Boolean cashWithdrawalsAllowed) {
        this.cashWithdrawalsAllowed = cashWithdrawalsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CashbackPercent")
    public String cashbackPercent;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withCashbackPercent(String cashbackPercent) {
        this.cashbackPercent = cashbackPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChequeFeePercent")
    public String chequeFeePercent;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withChequeFeePercent(String chequeFeePercent) {
        this.chequeFeePercent = chequeFeePercent;
        return this;
    }
    @JsonProperty("ConvenienceCheque")
    public Boolean convenienceCheque;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withConvenienceCheque(Boolean convenienceCheque) {
        this.convenienceCheque = convenienceCheque;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonProperty("DaysInterestFreeCreditIfPaymentFull")
    public Long daysInterestFreeCreditIfPaymentFull;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withDaysInterestFreeCreditIfPaymentFull(Long daysInterestFreeCreditIfPaymentFull) {
        this.daysInterestFreeCreditIfPaymentFull = daysInterestFreeCreditIfPaymentFull;
        return this;
    }
    @JsonProperty("ExchangeRateAdjustment")
    public String exchangeRateAdjustment;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withExchangeRateAdjustment(String exchangeRateAdjustment) {
        this.exchangeRateAdjustment = exchangeRateAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesOnCheque")
    public String feesOnCheque;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withFeesOnCheque(String feesOnCheque) {
        this.feesOnCheque = feesOnCheque;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForeignCashFee")
    public String foreignCashFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withForeignCashFee(String foreignCashFee) {
        this.foreignCashFee = foreignCashFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForeignCashFeeRate")
    public String foreignCashFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withForeignCashFeeRate(String foreignCashFeeRate) {
        this.foreignCashFeeRate = foreignCashFeeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForeignPurchaseFee")
    public String foreignPurchaseFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withForeignPurchaseFee(String foreignPurchaseFee) {
        this.foreignPurchaseFee = foreignPurchaseFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForeignPurchaseFeeRate")
    public String foreignPurchaseFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withForeignPurchaseFeeRate(String foreignPurchaseFeeRate) {
        this.foreignPurchaseFeeRate = foreignPurchaseFeeRate;
        return this;
    }
    @JsonProperty("IssuingEmergencyCardsFees")
    public String issuingEmergencyCardsFees;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withIssuingEmergencyCardsFees(String issuingEmergencyCardsFees) {
        this.issuingEmergencyCardsFees = issuingEmergencyCardsFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumNumberOfCardsPermitted")
    public Long maximumNumberOfCardsPermitted;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withMaximumNumberOfCardsPermitted(Long maximumNumberOfCardsPermitted) {
        this.maximumNumberOfCardsPermitted = maximumNumberOfCardsPermitted;
        return this;
    }
    @JsonProperty("MinimumCreditLimit")
    public String minimumCreditLimit;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withMinimumCreditLimit(String minimumCreditLimit) {
        this.minimumCreditLimit = minimumCreditLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumLendingAmount")
    public String minimumLendingAmount;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withMinimumLendingAmount(String minimumLendingAmount) {
        this.minimumLendingAmount = minimumLendingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumRepaymentAmount")
    public String minimumRepaymentAmount;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withMinimumRepaymentAmount(String minimumRepaymentAmount) {
        this.minimumRepaymentAmount = minimumRepaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumRepaymentPercentage")
    public String minimumRepaymentPercentage;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withMinimumRepaymentPercentage(String minimumRepaymentPercentage) {
        this.minimumRepaymentPercentage = minimumRepaymentPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingCashFee")
    public String nonSterlingCashFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingCashFee(String nonSterlingCashFee) {
        this.nonSterlingCashFee = nonSterlingCashFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingCashFeeRate")
    public String nonSterlingCashFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingCashFeeRate(String nonSterlingCashFeeRate) {
        this.nonSterlingCashFeeRate = nonSterlingCashFeeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingPurchaseFee")
    public String nonSterlingPurchaseFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingPurchaseFee(String nonSterlingPurchaseFee) {
        this.nonSterlingPurchaseFee = nonSterlingPurchaseFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingPurchaseFeeRate")
    public String nonSterlingPurchaseFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingPurchaseFeeRate(String nonSterlingPurchaseFeeRate) {
        this.nonSterlingPurchaseFeeRate = nonSterlingPurchaseFeeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingTransactionFee")
    public String nonSterlingTransactionFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingTransactionFee(String nonSterlingTransactionFee) {
        this.nonSterlingTransactionFee = nonSterlingTransactionFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonSterlingTransactionFeeRate")
    public String nonSterlingTransactionFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withNonSterlingTransactionFeeRate(String nonSterlingTransactionFeeRate) {
        this.nonSterlingTransactionFeeRate = nonSterlingTransactionFeeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverLimitFee")
    public String overLimitFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withOverLimitFee(String overLimitFee) {
        this.overLimitFee = overLimitFee;
        return this;
    }
    @JsonProperty("PaymentDaysAfterStatement")
    public Long paymentDaysAfterStatement;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withPaymentDaysAfterStatement(Long paymentDaysAfterStatement) {
        this.paymentDaysAfterStatement = paymentDaysAfterStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentSchemeExchangeFee")
    public String paymentSchemeExchangeFee;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withPaymentSchemeExchangeFee(String paymentSchemeExchangeFee) {
        this.paymentSchemeExchangeFee = paymentSchemeExchangeFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentSchemeExchangeFeeRate")
    public String paymentSchemeExchangeFeeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withPaymentSchemeExchangeFeeRate(String paymentSchemeExchangeFeeRate) {
        this.paymentSchemeExchangeFeeRate = paymentSchemeExchangeFeeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentSchemeExchangeRate")
    public String paymentSchemeExchangeRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withPaymentSchemeExchangeRate(String paymentSchemeExchangeRate) {
        this.paymentSchemeExchangeRate = paymentSchemeExchangeRate;
        return this;
    }
    @JsonProperty("PurchaseRate")
    public String purchaseRate;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withPurchaseRate(String purchaseRate) {
        this.purchaseRate = purchaseRate;
        return this;
    }
    @JsonProperty("RepaymentFrequency")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum repaymentFrequency;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withRepaymentFrequency(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum repaymentFrequency) {
        this.repaymentFrequency = repaymentFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepaymentNotes")
    public String repaymentNotes;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withRepaymentNotes(String repaymentNotes) {
        this.repaymentNotes = repaymentNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonProperty("StatementAtAccountLevel")
    public Boolean statementAtAccountLevel;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withStatementAtAccountLevel(Boolean statementAtAccountLevel) {
        this.statementAtAccountLevel = statementAtAccountLevel;
        return this;
    }
    @JsonProperty("StatementAtPersonalLevel")
    public Boolean statementAtPersonalLevel;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withStatementAtPersonalLevel(Boolean statementAtPersonalLevel) {
        this.statementAtPersonalLevel = statementAtPersonalLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
}
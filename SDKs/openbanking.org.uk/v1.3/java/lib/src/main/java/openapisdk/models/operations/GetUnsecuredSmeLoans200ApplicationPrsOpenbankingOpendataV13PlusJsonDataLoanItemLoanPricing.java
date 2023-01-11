package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing
 * Loan Pricing
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing {
    @JsonProperty("IndicativeRate")
    public String indicativeRate;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withIndicativeRate(String indicativeRate) {
        this.indicativeRate = indicativeRate;
        return this;
    }
    @JsonProperty("LoanLengthIncrement")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum loanLengthIncrement;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withLoanLengthIncrement(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum loanLengthIncrement) {
        this.loanLengthIncrement = loanLengthIncrement;
        return this;
    }
    @JsonProperty("LoanLengthIncrementLower")
    public Long loanLengthIncrementLower;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withLoanLengthIncrementLower(Long loanLengthIncrementLower) {
        this.loanLengthIncrementLower = loanLengthIncrementLower;
        return this;
    }
    @JsonProperty("LoanLengthIncrementUpper")
    public Long loanLengthIncrementUpper;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withLoanLengthIncrementUpper(Long loanLengthIncrementUpper) {
        this.loanLengthIncrementUpper = loanLengthIncrementUpper;
        return this;
    }
    @JsonProperty("LoanSizeBandLower")
    public String loanSizeBandLower;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withLoanSizeBandLower(String loanSizeBandLower) {
        this.loanSizeBandLower = loanSizeBandLower;
        return this;
    }
    @JsonProperty("LoanSizeBandUpper")
    public String loanSizeBandUpper;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withLoanSizeBandUpper(String loanSizeBandUpper) {
        this.loanSizeBandUpper = loanSizeBandUpper;
        return this;
    }
    @JsonProperty("Negotiable")
    public Boolean negotiable;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withNegotiable(Boolean negotiable) {
        this.negotiable = negotiable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RateComparisonType")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum rateComparisonType;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withRateComparisonType(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum rateComparisonType) {
        this.rateComparisonType = rateComparisonType;
        return this;
    }
    @JsonProperty("RepaymentFrequency")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum[] repaymentFrequency;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withRepaymentFrequency(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum[] repaymentFrequency) {
        this.repaymentFrequency = repaymentFrequency;
        return this;
    }
    @JsonProperty("SizeIncrement")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum sizeIncrement;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing withSizeIncrement(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum sizeIncrement) {
        this.sizeIncrement = sizeIncrement;
        return this;
    }
}
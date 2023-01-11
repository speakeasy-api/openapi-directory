package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem
 * Loan Item
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem {
    @JsonProperty("CCARegulatedEntity")
    public Boolean ccaRegulatedEntity;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withCcaRegulatedEntity(Boolean ccaRegulatedEntity) {
        this.ccaRegulatedEntity = ccaRegulatedEntity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonProperty("IsALowInterestRepaymentStartPossible")
    public Boolean isALowInterestRepaymentStartPossible;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withIsALowInterestRepaymentStartPossible(Boolean isALowInterestRepaymentStartPossible) {
        this.isALowInterestRepaymentStartPossible = isALowInterestRepaymentStartPossible;
        return this;
    }
    @JsonProperty("IsThisAnInterestOnlyLoan")
    public Boolean isThisAnInterestOnlyLoan;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withIsThisAnInterestOnlyLoan(Boolean isThisAnInterestOnlyLoan) {
        this.isThisAnInterestOnlyLoan = isThisAnInterestOnlyLoan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoanPricing")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing[] loanPricing;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withLoanPricing(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing[] loanPricing) {
        this.loanPricing = loanPricing;
        return this;
    }
    @JsonProperty("ProductState")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum productState;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withProductState(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum productState) {
        this.productState = productState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
    @JsonProperty("WillTheLoanBePaidInTrancheDrawdowns")
    public Boolean willTheLoanBePaidInTrancheDrawdowns;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem withWillTheLoanBePaidInTrancheDrawdowns(Boolean willTheLoanBePaidInTrancheDrawdowns) {
        this.willTheLoanBePaidInTrancheDrawdowns = willTheLoanBePaidInTrancheDrawdowns;
        return this;
    }
}
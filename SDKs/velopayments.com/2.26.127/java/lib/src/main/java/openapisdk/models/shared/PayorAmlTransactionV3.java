package openapisdk.models.shared;

import java.time.LocalDate;

public class PayorAmlTransactionV3 {
    public Long credit;
    public PayorAmlTransactionV3 withCredit(Long credit) {
        this.credit = credit;
        return this;
    }
    public String creditCurrency;
    public PayorAmlTransactionV3 withCreditCurrency(String creditCurrency) {
        this.creditCurrency = creditCurrency;
        return this;
    }
    public String dateFundingRequested;
    public PayorAmlTransactionV3 withDateFundingRequested(String dateFundingRequested) {
        this.dateFundingRequested = dateFundingRequested;
        return this;
    }
    public Long debit;
    public PayorAmlTransactionV3 withDebit(Long debit) {
        this.debit = debit;
        return this;
    }
    public String debitCurrency;
    public PayorAmlTransactionV3 withDebitCurrency(String debitCurrency) {
        this.debitCurrency = debitCurrency;
        return this;
    }
    public String fundingType;
    public PayorAmlTransactionV3 withFundingType(String fundingType) {
        this.fundingType = fundingType;
        return this;
    }
    public Double fxApplied;
    public PayorAmlTransactionV3 withFxApplied(Double fxApplied) {
        this.fxApplied = fxApplied;
        return this;
    }
    public String payeeType;
    public PayorAmlTransactionV3 withPayeeType(String payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    public Long paymentAmount;
    public PayorAmlTransactionV3 withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    public String paymentCurrency;
    public PayorAmlTransactionV3 withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    public String paymentMemo;
    public PayorAmlTransactionV3 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    public String paymentRails;
    public PayorAmlTransactionV3 withPaymentRails(String paymentRails) {
        this.paymentRails = paymentRails;
        return this;
    }
    public String paymentStatus;
    public PayorAmlTransactionV3 withPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    public String payorPaymentId;
    public PayorAmlTransactionV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    public String rejectReason;
    public PayorAmlTransactionV3 withRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
        return this;
    }
    public String remoteId;
    public PayorAmlTransactionV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    public String reportTransactionType;
    public PayorAmlTransactionV3 withReportTransactionType(String reportTransactionType) {
        this.reportTransactionType = reportTransactionType;
        return this;
    }
    public String returnCode;
    public PayorAmlTransactionV3 withReturnCode(String returnCode) {
        this.returnCode = returnCode;
        return this;
    }
    public String returnDescription;
    public PayorAmlTransactionV3 withReturnDescription(String returnDescription) {
        this.returnDescription = returnDescription;
        return this;
    }
    public String returnFee;
    public PayorAmlTransactionV3 withReturnFee(String returnFee) {
        this.returnFee = returnFee;
        return this;
    }
    public String returnFeeCurrency;
    public PayorAmlTransactionV3 withReturnFeeCurrency(String returnFeeCurrency) {
        this.returnFeeCurrency = returnFeeCurrency;
        return this;
    }
    public String returnFeeDescription;
    public PayorAmlTransactionV3 withReturnFeeDescription(String returnFeeDescription) {
        this.returnFeeDescription = returnFeeDescription;
        return this;
    }
    public String sourceAccount;
    public PayorAmlTransactionV3 withSourceAccount(String sourceAccount) {
        this.sourceAccount = sourceAccount;
        return this;
    }
    public LocalDate transactionDate;
    public PayorAmlTransactionV3 withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    public String transactionTime;
    public PayorAmlTransactionV3 withTransactionTime(String transactionTime) {
        this.transactionTime = transactionTime;
        return this;
    }
}
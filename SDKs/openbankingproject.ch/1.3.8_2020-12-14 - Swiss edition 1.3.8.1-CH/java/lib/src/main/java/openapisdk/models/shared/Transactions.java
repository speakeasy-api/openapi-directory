package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transactions
 * Transaction details.
**/
public class Transactions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Transactions withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInformation")
    public String additionalInformation;
    public Transactions withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInformationStructured")
    public AdditionalInformationStructured additionalInformationStructured;
    public Transactions withAdditionalInformationStructured(AdditionalInformationStructured additionalInformationStructured) {
        this.additionalInformationStructured = additionalInformationStructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceAfterTransaction")
    public Balance balanceAfterTransaction;
    public Transactions withBalanceAfterTransaction(Balance balanceAfterTransaction) {
        this.balanceAfterTransaction = balanceAfterTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankTransactionCode")
    public String bankTransactionCode;
    public Transactions withBankTransactionCode(String bankTransactionCode) {
        this.bankTransactionCode = bankTransactionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchIndicator")
    public Boolean batchIndicator;
    public Transactions withBatchIndicator(Boolean batchIndicator) {
        this.batchIndicator = batchIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchNumberOfTransactions")
    public Long batchNumberOfTransactions;
    public Transactions withBatchNumberOfTransactions(Long batchNumberOfTransactions) {
        this.batchNumberOfTransactions = batchNumberOfTransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public LocalDate bookingDate;
    public Transactions withBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkId")
    public String checkId;
    public Transactions withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAccount")
    public AccountReference16Ch creditorAccount;
    public Transactions withCreditorAccount(AccountReference16Ch creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAgent")
    public String creditorAgent;
    public Transactions withCreditorAgent(String creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorId")
    public String creditorId;
    public Transactions withCreditorId(String creditorId) {
        this.creditorId = creditorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorName")
    public String creditorName;
    public Transactions withCreditorName(String creditorName) {
        this.creditorName = creditorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyExchange")
    public ReportExchangeRate[] currencyExchange;
    public Transactions withCurrencyExchange(ReportExchangeRate[] currencyExchange) {
        this.currencyExchange = currencyExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public Transactions withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorAgent")
    public String debtorAgent;
    public Transactions withDebtorAgent(String debtorAgent) {
        this.debtorAgent = debtorAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorName")
    public String debtorName;
    public Transactions withDebtorName(String debtorName) {
        this.debtorName = debtorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endToEndId")
    public String endToEndId;
    public Transactions withEndToEndId(String endToEndId) {
        this.endToEndId = endToEndId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryDetails")
    public EntryDetailsElement[] entryDetails;
    public Transactions withEntryDetails(EntryDetailsElement[] entryDetails) {
        this.entryDetails = entryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryReference")
    public String entryReference;
    public Transactions withEntryReference(String entryReference) {
        this.entryReference = entryReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateId")
    public String mandateId;
    public Transactions withMandateId(String mandateId) {
        this.mandateId = mandateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proprietaryBankTransactionCode")
    public String proprietaryBankTransactionCode;
    public Transactions withProprietaryBankTransactionCode(String proprietaryBankTransactionCode) {
        this.proprietaryBankTransactionCode = proprietaryBankTransactionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeCode")
    public PurposeCodeEnum purposeCode;
    public Transactions withPurposeCode(PurposeCodeEnum purposeCode) {
        this.purposeCode = purposeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructured")
    public String remittanceInformationStructured;
    public Transactions withRemittanceInformationStructured(String remittanceInformationStructured) {
        this.remittanceInformationStructured = remittanceInformationStructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructuredArray")
    public RemittanceInformationStructured[] remittanceInformationStructuredArray;
    public Transactions withRemittanceInformationStructuredArray(RemittanceInformationStructured[] remittanceInformationStructuredArray) {
        this.remittanceInformationStructuredArray = remittanceInformationStructuredArray;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructured")
    public String remittanceInformationUnstructured;
    public Transactions withRemittanceInformationUnstructured(String remittanceInformationUnstructured) {
        this.remittanceInformationUnstructured = remittanceInformationUnstructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructuredArray")
    public String[] remittanceInformationUnstructuredArray;
    public Transactions withRemittanceInformationUnstructuredArray(String[] remittanceInformationUnstructuredArray) {
        this.remittanceInformationUnstructuredArray = remittanceInformationUnstructuredArray;
        return this;
    }
    @JsonProperty("transactionAmount")
    public Amount transactionAmount;
    public Transactions withTransactionAmount(Amount transactionAmount) {
        this.transactionAmount = transactionAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public Transactions withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateCreditor")
    public String ultimateCreditor;
    public Transactions withUltimateCreditor(String ultimateCreditor) {
        this.ultimateCreditor = ultimateCreditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateDebtor")
    public String ultimateDebtor;
    public Transactions withUltimateDebtor(String ultimateDebtor) {
        this.ultimateDebtor = ultimateDebtor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueDate")
    public LocalDate valueDate;
    public Transactions withValueDate(LocalDate valueDate) {
        this.valueDate = valueDate;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryDetailsElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkId")
    public String checkId;
    public EntryDetailsElement withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAccount")
    public AccountReference16Ch creditorAccount;
    public EntryDetailsElement withCreditorAccount(AccountReference16Ch creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAgent")
    public String creditorAgent;
    public EntryDetailsElement withCreditorAgent(String creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorId")
    public String creditorId;
    public EntryDetailsElement withCreditorId(String creditorId) {
        this.creditorId = creditorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorName")
    public String creditorName;
    public EntryDetailsElement withCreditorName(String creditorName) {
        this.creditorName = creditorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyExchange")
    public ReportExchangeRate[] currencyExchange;
    public EntryDetailsElement withCurrencyExchange(ReportExchangeRate[] currencyExchange) {
        this.currencyExchange = currencyExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public EntryDetailsElement withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorAgent")
    public String debtorAgent;
    public EntryDetailsElement withDebtorAgent(String debtorAgent) {
        this.debtorAgent = debtorAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtorName")
    public String debtorName;
    public EntryDetailsElement withDebtorName(String debtorName) {
        this.debtorName = debtorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endToEndId")
    public String endToEndId;
    public EntryDetailsElement withEndToEndId(String endToEndId) {
        this.endToEndId = endToEndId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateId")
    public String mandateId;
    public EntryDetailsElement withMandateId(String mandateId) {
        this.mandateId = mandateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeCode")
    public PurposeCodeEnum purposeCode;
    public EntryDetailsElement withPurposeCode(PurposeCodeEnum purposeCode) {
        this.purposeCode = purposeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructured")
    public RemittanceInformationStructured remittanceInformationStructured;
    public EntryDetailsElement withRemittanceInformationStructured(RemittanceInformationStructured remittanceInformationStructured) {
        this.remittanceInformationStructured = remittanceInformationStructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructuredArray")
    public RemittanceInformationStructured[] remittanceInformationStructuredArray;
    public EntryDetailsElement withRemittanceInformationStructuredArray(RemittanceInformationStructured[] remittanceInformationStructuredArray) {
        this.remittanceInformationStructuredArray = remittanceInformationStructuredArray;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructured")
    public String remittanceInformationUnstructured;
    public EntryDetailsElement withRemittanceInformationUnstructured(String remittanceInformationUnstructured) {
        this.remittanceInformationUnstructured = remittanceInformationUnstructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructuredArray")
    public String[] remittanceInformationUnstructuredArray;
    public EntryDetailsElement withRemittanceInformationUnstructuredArray(String[] remittanceInformationUnstructuredArray) {
        this.remittanceInformationUnstructuredArray = remittanceInformationUnstructuredArray;
        return this;
    }
    @JsonProperty("transactionAmount")
    public Amount transactionAmount;
    public EntryDetailsElement withTransactionAmount(Amount transactionAmount) {
        this.transactionAmount = transactionAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateCreditor")
    public String ultimateCreditor;
    public EntryDetailsElement withUltimateCreditor(String ultimateCreditor) {
        this.ultimateCreditor = ultimateCreditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateDebtor")
    public String ultimateDebtor;
    public EntryDetailsElement withUltimateDebtor(String ultimateDebtor) {
        this.ultimateDebtor = ultimateDebtor;
        return this;
    }
}
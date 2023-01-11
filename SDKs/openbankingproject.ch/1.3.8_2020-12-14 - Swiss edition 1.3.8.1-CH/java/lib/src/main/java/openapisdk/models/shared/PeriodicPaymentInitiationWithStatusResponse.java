package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PeriodicPaymentInitiationWithStatusResponse
 * Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.
 * 
**/
public class PeriodicPaymentInitiationWithStatusResponse {
    @JsonProperty("creditorAccount")
    public AccountReference16Ch creditorAccount;
    public PeriodicPaymentInitiationWithStatusResponse withCreditorAccount(AccountReference16Ch creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAddress")
    public Address creditorAddress;
    public PeriodicPaymentInitiationWithStatusResponse withCreditorAddress(Address creditorAddress) {
        this.creditorAddress = creditorAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAgent")
    public CreditorAgent7Ch creditorAgent;
    public PeriodicPaymentInitiationWithStatusResponse withCreditorAgent(CreditorAgent7Ch creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("creditorName")
    public String creditorName;
    public PeriodicPaymentInitiationWithStatusResponse withCreditorName(String creditorName) {
        this.creditorName = creditorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfExecution")
    public DayOfExecutionEnum dayOfExecution;
    public PeriodicPaymentInitiationWithStatusResponse withDayOfExecution(DayOfExecutionEnum dayOfExecution) {
        this.dayOfExecution = dayOfExecution;
        return this;
    }
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public PeriodicPaymentInitiationWithStatusResponse withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public PeriodicPaymentInitiationWithStatusResponse withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endToEndIdentification")
    public String endToEndIdentification;
    public PeriodicPaymentInitiationWithStatusResponse withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionRule")
    public ExecutionRuleEnum executionRule;
    public PeriodicPaymentInitiationWithStatusResponse withExecutionRule(ExecutionRuleEnum executionRule) {
        this.executionRule = executionRule;
        return this;
    }
    @JsonProperty("frequency")
    public FrequencyCodeEnum frequency;
    public PeriodicPaymentInitiationWithStatusResponse withFrequency(FrequencyCodeEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("instructedAmount")
    public Amount instructedAmount;
    public PeriodicPaymentInitiationWithStatusResponse withInstructedAmount(Amount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeCode")
    public PurposeCodeEnum purposeCode;
    public PeriodicPaymentInitiationWithStatusResponse withPurposeCode(PurposeCodeEnum purposeCode) {
        this.purposeCode = purposeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructured")
    public RemittanceInformationStructured remittanceInformationStructured;
    public PeriodicPaymentInitiationWithStatusResponse withRemittanceInformationStructured(RemittanceInformationStructured remittanceInformationStructured) {
        this.remittanceInformationStructured = remittanceInformationStructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructured")
    public String remittanceInformationUnstructured;
    public PeriodicPaymentInitiationWithStatusResponse withRemittanceInformationUnstructured(String remittanceInformationUnstructured) {
        this.remittanceInformationUnstructured = remittanceInformationUnstructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructuredArray")
    public String[] remittanceInformationUnstructuredArray;
    public PeriodicPaymentInitiationWithStatusResponse withRemittanceInformationUnstructuredArray(String[] remittanceInformationUnstructuredArray) {
        this.remittanceInformationUnstructuredArray = remittanceInformationUnstructuredArray;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedExecutionDate")
    public LocalDate requestedExecutionDate;
    public PeriodicPaymentInitiationWithStatusResponse withRequestedExecutionDate(LocalDate requestedExecutionDate) {
        this.requestedExecutionDate = requestedExecutionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedExecutionTime")
    public OffsetDateTime requestedExecutionTime;
    public PeriodicPaymentInitiationWithStatusResponse withRequestedExecutionTime(OffsetDateTime requestedExecutionTime) {
        this.requestedExecutionTime = requestedExecutionTime;
        return this;
    }
    @JsonProperty("startDate")
    public LocalDate startDate;
    public PeriodicPaymentInitiationWithStatusResponse withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public PeriodicPaymentInitiationWithStatusResponse withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateCreditor")
    public String ultimateCreditor;
    public PeriodicPaymentInitiationWithStatusResponse withUltimateCreditor(String ultimateCreditor) {
        this.ultimateCreditor = ultimateCreditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateDebtor")
    public String ultimateDebtor;
    public PeriodicPaymentInitiationWithStatusResponse withUltimateDebtor(String ultimateDebtor) {
        this.ultimateDebtor = ultimateDebtor;
        return this;
    }
}
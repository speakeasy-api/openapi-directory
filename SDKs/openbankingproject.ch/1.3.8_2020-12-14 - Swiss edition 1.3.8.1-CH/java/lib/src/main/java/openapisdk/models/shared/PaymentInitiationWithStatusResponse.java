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
 * PaymentInitiationWithStatusResponse
 * Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
 * 
**/
public class PaymentInitiationWithStatusResponse {
    @JsonProperty("creditorAccount")
    public AccountReference16Ch creditorAccount;
    public PaymentInitiationWithStatusResponse withCreditorAccount(AccountReference16Ch creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAddress")
    public Address creditorAddress;
    public PaymentInitiationWithStatusResponse withCreditorAddress(Address creditorAddress) {
        this.creditorAddress = creditorAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditorAgent")
    public CreditorAgent7Ch creditorAgent;
    public PaymentInitiationWithStatusResponse withCreditorAgent(CreditorAgent7Ch creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("creditorName")
    public String creditorName;
    public PaymentInitiationWithStatusResponse withCreditorName(String creditorName) {
        this.creditorName = creditorName;
        return this;
    }
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public PaymentInitiationWithStatusResponse withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endToEndIdentification")
    public String endToEndIdentification;
    public PaymentInitiationWithStatusResponse withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("instructedAmount")
    public Amount instructedAmount;
    public PaymentInitiationWithStatusResponse withInstructedAmount(Amount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeCode")
    public PurposeCodeEnum purposeCode;
    public PaymentInitiationWithStatusResponse withPurposeCode(PurposeCodeEnum purposeCode) {
        this.purposeCode = purposeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationStructured")
    public RemittanceInformationStructured remittanceInformationStructured;
    public PaymentInitiationWithStatusResponse withRemittanceInformationStructured(RemittanceInformationStructured remittanceInformationStructured) {
        this.remittanceInformationStructured = remittanceInformationStructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructured")
    public String remittanceInformationUnstructured;
    public PaymentInitiationWithStatusResponse withRemittanceInformationUnstructured(String remittanceInformationUnstructured) {
        this.remittanceInformationUnstructured = remittanceInformationUnstructured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittanceInformationUnstructuredArray")
    public String[] remittanceInformationUnstructuredArray;
    public PaymentInitiationWithStatusResponse withRemittanceInformationUnstructuredArray(String[] remittanceInformationUnstructuredArray) {
        this.remittanceInformationUnstructuredArray = remittanceInformationUnstructuredArray;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedExecutionDate")
    public LocalDate requestedExecutionDate;
    public PaymentInitiationWithStatusResponse withRequestedExecutionDate(LocalDate requestedExecutionDate) {
        this.requestedExecutionDate = requestedExecutionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedExecutionTime")
    public OffsetDateTime requestedExecutionTime;
    public PaymentInitiationWithStatusResponse withRequestedExecutionTime(OffsetDateTime requestedExecutionTime) {
        this.requestedExecutionTime = requestedExecutionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public PaymentInitiationWithStatusResponse withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateCreditor")
    public String ultimateCreditor;
    public PaymentInitiationWithStatusResponse withUltimateCreditor(String ultimateCreditor) {
        this.ultimateCreditor = ultimateCreditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultimateDebtor")
    public String ultimateDebtor;
    public PaymentInitiationWithStatusResponse withUltimateDebtor(String ultimateDebtor) {
        this.ultimateDebtor = ultimateDebtor;
        return this;
    }
}
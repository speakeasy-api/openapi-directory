package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CisTransactionCisTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisMessageType")
    public CisTransactionCisTransactionCisMessageTypeEnum cisMessageType;
    public CisTransactionCisTransaction withCisMessageType(CisTransactionCisTransactionCisMessageTypeEnum cisMessageType) {
        this.cisMessageType = cisMessageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerCore")
    public CisTransactionCisTransactionEmployerCore employerCore;
    public CisTransactionCisTransaction withEmployerCore(CisTransactionCisTransactionEmployerCore employerCore) {
        this.employerCore = employerCore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestData")
    public String requestData;
    public CisTransactionCisTransaction withRequestData(String requestData) {
        this.requestData = requestData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseData")
    public String responseData;
    public CisTransactionCisTransaction withResponseData(String responseData) {
        this.responseData = responseData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public CisTransactionCisTransaction withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public CisTransactionCisTransaction withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionStatus")
    public CisTransactionCisTransactionTransactionStatusEnum transactionStatus;
    public CisTransactionCisTransaction withTransactionStatus(CisTransactionCisTransactionTransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransmissionDate")
    public OffsetDateTime transmissionDate;
    public CisTransactionCisTransaction withTransmissionDate(OffsetDateTime transmissionDate) {
        this.transmissionDate = transmissionDate;
        return this;
    }
}
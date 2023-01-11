package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RtiTransactionBaseRtiTransactionBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerCore")
    public RtiTransactionBaseRtiTransactionBaseEmployerCore employerCore;
    public RtiTransactionBaseRtiTransactionBase withEmployerCore(RtiTransactionBaseRtiTransactionBaseEmployerCore employerCore) {
        this.employerCore = employerCore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestData")
    public String requestData;
    public RtiTransactionBaseRtiTransactionBase withRequestData(String requestData) {
        this.requestData = requestData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseData")
    public String responseData;
    public RtiTransactionBaseRtiTransactionBase withResponseData(String responseData) {
        this.responseData = responseData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RtiType")
    public String rtiType;
    public RtiTransactionBaseRtiTransactionBase withRtiType(String rtiType) {
        this.rtiType = rtiType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public RtiTransactionBaseRtiTransactionBase withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public RtiTransactionBaseRtiTransactionBase withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionStatus")
    public RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum transactionStatus;
    public RtiTransactionBaseRtiTransactionBase withTransactionStatus(RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransmissionDate")
    public OffsetDateTime transmissionDate;
    public RtiTransactionBaseRtiTransactionBase withTransmissionDate(OffsetDateTime transmissionDate) {
        this.transmissionDate = transmissionDate;
        return this;
    }
}
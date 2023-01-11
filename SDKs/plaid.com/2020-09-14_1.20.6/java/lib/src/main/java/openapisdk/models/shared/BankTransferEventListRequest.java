package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BankTransferEventListRequest
 * BankTransferEventListRequest defines the request schema for `/bank_transfer/event/list`
**/
public class BankTransferEventListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public BankTransferEventListRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_transfer_id")
    public String bankTransferId;
    public BankTransferEventListRequest withBankTransferId(String bankTransferId) {
        this.bankTransferId = bankTransferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_transfer_type")
    public BankTransferEventListRequestBankTransferTypeEnum bankTransferType;
    public BankTransferEventListRequest withBankTransferType(BankTransferEventListRequestBankTransferTypeEnum bankTransferType) {
        this.bankTransferType = bankTransferType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferEventListRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BankTransferEventListRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public BankTransferEventListRequestBankTransferDirectionEnum direction;
    public BankTransferEventListRequest withDirection(BankTransferEventListRequestBankTransferDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_date")
    public OffsetDateTime endDate;
    public BankTransferEventListRequest withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_types")
    public BankTransferEventTypeEnum[] eventTypes;
    public BankTransferEventListRequest withEventTypes(BankTransferEventTypeEnum[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public BankTransferEventListRequest withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_account_id")
    public String originationAccountId;
    public BankTransferEventListRequest withOriginationAccountId(String originationAccountId) {
        this.originationAccountId = originationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferEventListRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_date")
    public OffsetDateTime startDate;
    public BankTransferEventListRequest withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}
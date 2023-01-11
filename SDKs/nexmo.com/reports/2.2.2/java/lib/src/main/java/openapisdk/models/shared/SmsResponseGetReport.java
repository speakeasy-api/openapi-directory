package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsResponseGetReport
 * SMS
**/
public class SmsResponseGetReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public SmsResponseGetReport withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public SmsResponseGetReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ref")
    public String accountRef;
    public SmsResponseGetReport withAccountRef(String accountRef) {
        this.accountRef = accountRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public SmsResponseGetReport withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SmsResponseGetReport withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public SmsResponseGetReport withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public SmsResponseGetReport withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonProperty("direction")
    public DirectionEnum direction;
    public SmsResponseGetReport withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public SmsResponseGetReport withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_message")
    public Boolean includeMessage;
    public SmsResponseGetReport withIncludeMessage(Boolean includeMessage) {
        this.includeMessage = includeMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public SmsResponseGetReport withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public SmsResponseGetReport withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public SmsResponseGetReport withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonProperty("product")
    public ProductSmsEnum product;
    public SmsResponseGetReport withProduct(ProductSmsEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_time")
    public LocalDate receiveTime;
    public SmsResponseGetReport withReceiveTime(LocalDate receiveTime) {
        this.receiveTime = receiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public SmsResponseGetReport withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public RequestStatusEnum requestStatus;
    public SmsResponseGetReport withRequestStatus(RequestStatusEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_concatenated")
    public Boolean showConcatenated;
    public SmsResponseGetReport withShowConcatenated(Boolean showConcatenated) {
        this.showConcatenated = showConcatenated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public LocalDate startTime;
    public SmsResponseGetReport withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SmsStatusEnum status;
    public SmsResponseGetReport withStatus(SmsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public SmsResponseGetReport withTo(String to) {
        this.to = to;
        return this;
    }
}
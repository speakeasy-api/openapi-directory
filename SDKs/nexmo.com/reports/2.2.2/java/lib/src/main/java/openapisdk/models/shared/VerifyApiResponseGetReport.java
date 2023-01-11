package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyApiResponseGetReport
 * Verify
**/
public class VerifyApiResponseGetReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public VerifyApiResponseGetReport withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public VerifyApiResponseGetReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public VerifyApiResponseGetReport withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public VerifyApiResponseGetReport withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public VerifyApiResponseGetReport withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public VerifyApiResponseGetReport withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public VerifyApiResponseGetReport withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public VerifyApiResponseGetReport withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public ProductVerifyEnum product;
    public VerifyApiResponseGetReport withProduct(ProductVerifyEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_time")
    public LocalDate receiveTime;
    public VerifyApiResponseGetReport withReceiveTime(LocalDate receiveTime) {
        this.receiveTime = receiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public VerifyApiResponseGetReport withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public RequestStatusEnum requestStatus;
    public VerifyApiResponseGetReport withRequestStatus(RequestStatusEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public LocalDate startTime;
    public VerifyApiResponseGetReport withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public VerifyApiResponseGetReport withTo(String to) {
        this.to = to;
        return this;
    }
}
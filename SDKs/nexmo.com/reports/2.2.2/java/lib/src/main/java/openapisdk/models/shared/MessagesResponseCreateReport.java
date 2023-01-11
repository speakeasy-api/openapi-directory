package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessagesResponseCreateReport
 * Messages
**/
public class MessagesResponseCreateReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public LinksCreateReport links;
    public MessagesResponseCreateReport withLinks(LinksCreateReport links) {
        this.links = links;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public MessagesResponseCreateReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public MessagesResponseCreateReport withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public MessagesResponseCreateReport withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public MessagesResponseCreateReport withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonProperty("direction")
    public DirectionEnum direction;
    public MessagesResponseCreateReport withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public MessagesResponseCreateReport withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MessagesResponseCreateReport withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_message")
    public Boolean includeMessage;
    public MessagesResponseCreateReport withIncludeMessage(Boolean includeMessage) {
        this.includeMessage = includeMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public MessagesResponseCreateReport withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonProperty("product")
    public ProductMessagesEnum product;
    public MessagesResponseCreateReport withProduct(ProductMessagesEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_time")
    public LocalDate receiveTime;
    public MessagesResponseCreateReport withReceiveTime(LocalDate receiveTime) {
        this.receiveTime = receiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public MessagesResponseCreateReport withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public RequestStatusCreateReportEnum requestStatus;
    public MessagesResponseCreateReport withRequestStatus(RequestStatusCreateReportEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public LocalDate startTime;
    public MessagesResponseCreateReport withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public MessagesResponseCreateReport withTo(String to) {
        this.to = to;
        return this;
    }
}
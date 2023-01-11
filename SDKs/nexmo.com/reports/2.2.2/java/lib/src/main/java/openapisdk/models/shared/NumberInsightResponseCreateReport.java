package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumberInsightResponseCreateReport
 * Number Insight
**/
public class NumberInsightResponseCreateReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public LinksCreateReport links;
    public NumberInsightResponseCreateReport withLinks(LinksCreateReport links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public NumberInsightResponseCreateReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public NumberInsightResponseCreateReport withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public NumberInsightResponseCreateReport withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public NumberInsightResponseCreateReport withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public NumberInsightResponseCreateReport withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NumberInsightResponseCreateReport withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public NumberInsightResponseCreateReport withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public ProductNiEnum product;
    public NumberInsightResponseCreateReport withProduct(ProductNiEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_time")
    public LocalDate receiveTime;
    public NumberInsightResponseCreateReport withReceiveTime(LocalDate receiveTime) {
        this.receiveTime = receiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public NumberInsightResponseCreateReport withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public RequestStatusCreateReportEnum requestStatus;
    public NumberInsightResponseCreateReport withRequestStatus(RequestStatusCreateReportEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public LocalDate startTime;
    public NumberInsightResponseCreateReport withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
}
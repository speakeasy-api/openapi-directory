package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountCall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountCall withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answered_by")
    public String answeredBy;
    public ApiV2010AccountCall withAnsweredBy(String answeredBy) {
        this.answeredBy = answeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountCall withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public ApiV2010AccountCall withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountCall withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountCall withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public ApiV2010AccountCall withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ApiV2010AccountCall withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public ApiV2010AccountCall withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwarded_from")
    public String forwardedFrom;
    public ApiV2010AccountCall withForwardedFrom(String forwardedFrom) {
        this.forwardedFrom = forwardedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public ApiV2010AccountCall withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_formatted")
    public String fromFormatted;
    public ApiV2010AccountCall withFromFormatted(String fromFormatted) {
        this.fromFormatted = fromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_sid")
    public String groupSid;
    public ApiV2010AccountCall withGroupSid(String groupSid) {
        this.groupSid = groupSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_call_sid")
    public String parentCallSid;
    public ApiV2010AccountCall withParentCallSid(String parentCallSid) {
        this.parentCallSid = parentCallSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number_sid")
    public String phoneNumberSid;
    public ApiV2010AccountCall withPhoneNumberSid(String phoneNumberSid) {
        this.phoneNumberSid = phoneNumberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public ApiV2010AccountCall withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountCall withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queue_time")
    public String queueTime;
    public ApiV2010AccountCall withQueueTime(String queueTime) {
        this.queueTime = queueTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountCall withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ApiV2010AccountCall withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CallEnumStatusEnum status;
    public ApiV2010AccountCall withStatus(CallEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountCall withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public ApiV2010AccountCall withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_formatted")
    public String toFormatted;
    public ApiV2010AccountCall withToFormatted(String toFormatted) {
        this.toFormatted = toFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trunk_sid")
    public String trunkSid;
    public ApiV2010AccountCall withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountCall withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
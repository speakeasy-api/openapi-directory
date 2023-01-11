package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InsightsV1CallSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1CallSummaries withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answered_by")
    public CallSummariesEnumAnsweredByEnum answeredBy;
    public InsightsV1CallSummaries withAnsweredBy(CallSummariesEnumAnsweredByEnum answeredBy) {
        this.answeredBy = answeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Object attributes;
    public InsightsV1CallSummaries withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public InsightsV1CallSummaries withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_state")
    public CallSummariesEnumCallStateEnum callState;
    public InsightsV1CallSummaries withCallState(CallSummariesEnumCallStateEnum callState) {
        this.callState = callState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_type")
    public CallSummariesEnumCallTypeEnum callType;
    public InsightsV1CallSummaries withCallType(CallSummariesEnumCallTypeEnum callType) {
        this.callType = callType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_edge")
    public Object carrierEdge;
    public InsightsV1CallSummaries withCarrierEdge(Object carrierEdge) {
        this.carrierEdge = carrierEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_edge")
    public Object clientEdge;
    public InsightsV1CallSummaries withClientEdge(Object clientEdge) {
        this.clientEdge = clientEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_duration")
    public Long connectDuration;
    public InsightsV1CallSummaries withConnectDuration(Long connectDuration) {
        this.connectDuration = connectDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public InsightsV1CallSummaries withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public InsightsV1CallSummaries withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public InsightsV1CallSummaries withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public Object from;
    public InsightsV1CallSummaries withFrom(Object from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_state")
    public CallSummariesEnumProcessingStateEnum processingState;
    public InsightsV1CallSummaries withProcessingState(CallSummariesEnumProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public InsightsV1CallSummaries withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdk_edge")
    public Object sdkEdge;
    public InsightsV1CallSummaries withSDKEdge(Object sdkEdge) {
        this.sdkEdge = sdkEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_edge")
    public Object sipEdge;
    public InsightsV1CallSummaries withSipEdge(Object sipEdge) {
        this.sipEdge = sipEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public InsightsV1CallSummaries withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public InsightsV1CallSummaries withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public Object to;
    public InsightsV1CallSummaries withTo(Object to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trust")
    public Object trust;
    public InsightsV1CallSummaries withTrust(Object trust) {
        this.trust = trust;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1CallSummaries withUrl(String url) {
        this.url = url;
        return this;
    }
}
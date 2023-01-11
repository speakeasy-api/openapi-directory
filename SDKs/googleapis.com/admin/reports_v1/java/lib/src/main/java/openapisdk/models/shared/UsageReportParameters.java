package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UsageReportParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public UsageReportParameters withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("datetimeValue")
    public OffsetDateTime datetimeValue;
    public UsageReportParameters withDatetimeValue(OffsetDateTime datetimeValue) {
        this.datetimeValue = datetimeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intValue")
    public String intValue;
    public UsageReportParameters withIntValue(String intValue) {
        this.intValue = intValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msgValue")
    public java.util.Map<String, Object>[] msgValue;
    public UsageReportParameters withMsgValue(java.util.Map<String, Object>[] msgValue) {
        this.msgValue = msgValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UsageReportParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public UsageReportParameters withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}
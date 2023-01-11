package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PropertyValue {
    @JsonProperty("name")
    public String name;
    public PropertyValue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public PropertyValue withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("selectedByUser")
    public Boolean selectedByUser;
    public PropertyValue withSelectedByUser(Boolean selectedByUser) {
        this.selectedByUser = selectedByUser;
        return this;
    }
    @JsonProperty("selectedByUserTimestamp")
    public Long selectedByUserTimestamp;
    public PropertyValue withSelectedByUserTimestamp(Long selectedByUserTimestamp) {
        this.selectedByUserTimestamp = selectedByUserTimestamp;
        return this;
    }
    @JsonProperty("source")
    public PropertyValueSourceEnum source;
    public PropertyValue withSource(PropertyValueSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public PropertyValue withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("sourceLabel")
    public String sourceLabel;
    public PropertyValue withSourceLabel(String sourceLabel) {
        this.sourceLabel = sourceLabel;
        return this;
    }
    @JsonProperty("sourceMetadata")
    public String sourceMetadata;
    public PropertyValue withSourceMetadata(String sourceMetadata) {
        this.sourceMetadata = sourceMetadata;
        return this;
    }
    @JsonProperty("sourceVid")
    public Long[] sourceVid;
    public PropertyValue withSourceVid(Long[] sourceVid) {
        this.sourceVid = sourceVid;
        return this;
    }
    @JsonProperty("timestamp")
    public Long timestamp;
    public PropertyValue withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedByUserId")
    public Integer updatedByUserId;
    public PropertyValue withUpdatedByUserId(Integer updatedByUserId) {
        this.updatedByUserId = updatedByUserId;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public PropertyValue withValue(String value) {
        this.value = value;
        return this;
    }
}
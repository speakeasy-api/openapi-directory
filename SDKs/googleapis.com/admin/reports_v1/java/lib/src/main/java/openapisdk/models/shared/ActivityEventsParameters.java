package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityEventsParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public ActivityEventsParameters withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intValue")
    public String intValue;
    public ActivityEventsParameters withIntValue(String intValue) {
        this.intValue = intValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageValue")
    public ActivityEventsParametersMessageValue messageValue;
    public ActivityEventsParameters withMessageValue(ActivityEventsParametersMessageValue messageValue) {
        this.messageValue = messageValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiIntValue")
    public String[] multiIntValue;
    public ActivityEventsParameters withMultiIntValue(String[] multiIntValue) {
        this.multiIntValue = multiIntValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiMessageValue")
    public ActivityEventsParametersMultiMessageValue[] multiMessageValue;
    public ActivityEventsParameters withMultiMessageValue(ActivityEventsParametersMultiMessageValue[] multiMessageValue) {
        this.multiMessageValue = multiMessageValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiValue")
    public String[] multiValue;
    public ActivityEventsParameters withMultiValue(String[] multiValue) {
        this.multiValue = multiValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ActivityEventsParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ActivityEventsParameters withValue(String value) {
        this.value = value;
        return this;
    }
}
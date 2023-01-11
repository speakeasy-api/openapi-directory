package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEvent
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
**/
public class CustomEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotateClickEvent")
    public CustomEventClickAnnotation annotateClickEvent;
    public CustomEvent withAnnotateClickEvent(CustomEventClickAnnotation annotateClickEvent) {
        this.annotateClickEvent = annotateClickEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotateImpressionEvent")
    public CustomEventImpressionAnnotation annotateImpressionEvent;
    public CustomEvent withAnnotateImpressionEvent(CustomEventImpressionAnnotation annotateImpressionEvent) {
        this.annotateImpressionEvent = annotateImpressionEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customVariables")
    public CustomVariable[] customVariables;
    public CustomEvent withCustomVariables(CustomVariable[] customVariables) {
        this.customVariables = customVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public CustomEventEventTypeEnum eventType;
    public CustomEvent withEventType(CustomEventEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationId")
    public String floodlightConfigurationId;
    public CustomEvent withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertEvent")
    public CustomEventInsert insertEvent;
    public CustomEvent withInsertEvent(CustomEventInsert insertEvent) {
        this.insertEvent = insertEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEvent withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordinal")
    public String ordinal;
    public CustomEvent withOrdinal(String ordinal) {
        this.ordinal = ordinal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampMicros")
    public String timestampMicros;
    public CustomEvent withTimestampMicros(String timestampMicros) {
        this.timestampMicros = timestampMicros;
        return this;
    }
}
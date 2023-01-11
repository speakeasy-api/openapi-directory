package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PowerFeed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amperage")
    public Long amperage;
    public PowerFeed withAmperage(Long amperage) {
        this.amperage = amperage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public PowerFeed withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public PowerFeed withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public PowerFeed withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerFeed withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public PowerFeed withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_utilization")
    public Long maxUtilization;
    public PowerFeed withMaxUtilization(Long maxUtilization) {
        this.maxUtilization = maxUtilization;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerFeed withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public PowerFeedPhase phase;
    public PowerFeed withPhase(PowerFeedPhase phase) {
        this.phase = phase;
        return this;
    }
    @JsonProperty("power_panel")
    public NestedPowerPanel powerPanel;
    public PowerFeed withPowerPanel(NestedPowerPanel powerPanel) {
        this.powerPanel = powerPanel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rack")
    public NestedRack rack;
    public PowerFeed withRack(NestedRack rack) {
        this.rack = rack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PowerFeedStatus status;
    public PowerFeed withStatus(PowerFeedStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supply")
    public PowerFeedSupply supply;
    public PowerFeed withSupply(PowerFeedSupply supply) {
        this.supply = supply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PowerFeed withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PowerFeedType type;
    public PowerFeed withType(PowerFeedType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voltage")
    public Long voltage;
    public PowerFeed withVoltage(Long voltage) {
        this.voltage = voltage;
        return this;
    }
}
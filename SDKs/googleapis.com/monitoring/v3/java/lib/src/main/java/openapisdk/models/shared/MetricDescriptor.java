package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricDescriptor
 * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
**/
public class MetricDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MetricDescriptor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MetricDescriptor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public LabelDescriptor[] labels;
    public MetricDescriptor withLabels(LabelDescriptor[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public MetricDescriptorLaunchStageEnum launchStage;
    public MetricDescriptor withLaunchStage(MetricDescriptorLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public MetricDescriptorMetadata metadata;
    public MetricDescriptor withMetadata(MetricDescriptorMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKind")
    public MetricDescriptorMetricKindEnum metricKind;
    public MetricDescriptor withMetricKind(MetricDescriptorMetricKindEnum metricKind) {
        this.metricKind = metricKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoredResourceTypes")
    public String[] monitoredResourceTypes;
    public MetricDescriptor withMonitoredResourceTypes(String[] monitoredResourceTypes) {
        this.monitoredResourceTypes = monitoredResourceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MetricDescriptor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MetricDescriptor withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public MetricDescriptor withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public MetricDescriptorValueTypeEnum valueType;
    public MetricDescriptor withValueType(MetricDescriptorValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}
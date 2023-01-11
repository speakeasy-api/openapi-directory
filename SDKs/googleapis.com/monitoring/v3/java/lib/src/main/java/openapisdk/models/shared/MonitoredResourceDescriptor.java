package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitoredResourceDescriptor
 * An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
**/
public class MonitoredResourceDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MonitoredResourceDescriptor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MonitoredResourceDescriptor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public LabelDescriptor[] labels;
    public MonitoredResourceDescriptor withLabels(LabelDescriptor[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public MonitoredResourceDescriptorLaunchStageEnum launchStage;
    public MonitoredResourceDescriptor withLaunchStage(MonitoredResourceDescriptorLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MonitoredResourceDescriptor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MonitoredResourceDescriptor withType(String type) {
        this.type = type;
        return this;
    }
}
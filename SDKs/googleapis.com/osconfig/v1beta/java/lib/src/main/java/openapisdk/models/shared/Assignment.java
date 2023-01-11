package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Assignment
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
**/
public class Assignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupLabels")
    public AssignmentGroupLabel[] groupLabels;
    public Assignment withGroupLabels(AssignmentGroupLabel[] groupLabels) {
        this.groupLabels = groupLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceNamePrefixes")
    public String[] instanceNamePrefixes;
    public Assignment withInstanceNamePrefixes(String[] instanceNamePrefixes) {
        this.instanceNamePrefixes = instanceNamePrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public String[] instances;
    public Assignment withInstances(String[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osTypes")
    public AssignmentOsType[] osTypes;
    public Assignment withOsTypes(AssignmentOsType[] osTypes) {
        this.osTypes = osTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public Assignment withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}
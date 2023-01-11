package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchInstanceFilter
 * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
**/
public class PatchInstanceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public Boolean all;
    public PatchInstanceFilter withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupLabels")
    public PatchInstanceFilterGroupLabel[] groupLabels;
    public PatchInstanceFilter withGroupLabels(PatchInstanceFilterGroupLabel[] groupLabels) {
        this.groupLabels = groupLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceNamePrefixes")
    public String[] instanceNamePrefixes;
    public PatchInstanceFilter withInstanceNamePrefixes(String[] instanceNamePrefixes) {
        this.instanceNamePrefixes = instanceNamePrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public String[] instances;
    public PatchInstanceFilter withInstances(String[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public PatchInstanceFilter withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}
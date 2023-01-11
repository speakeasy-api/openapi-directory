package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resources
 * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
**/
public class Resources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public Resources withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachine")
    public VirtualMachine virtualMachine;
    public Resources withVirtualMachine(VirtualMachine virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public Resources withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchInstanceFilterGroupLabel
 * Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
**/
public class PatchInstanceFilterGroupLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PatchInstanceFilterGroupLabel withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}
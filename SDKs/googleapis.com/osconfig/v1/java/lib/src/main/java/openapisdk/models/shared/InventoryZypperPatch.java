package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryZypperPatch
 * Details related to a Zypper Patch.
**/
public class InventoryZypperPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public InventoryZypperPatch withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchName")
    public String patchName;
    public InventoryZypperPatch withPatchName(String patchName) {
        this.patchName = patchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public InventoryZypperPatch withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public InventoryZypperPatch withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WindowsUpdateSettings
 * Windows patching is performed using the Windows Update Agent.
**/
public class WindowsUpdateSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifications")
    public WindowsUpdateSettingsClassificationsEnum[] classifications;
    public WindowsUpdateSettings withClassifications(WindowsUpdateSettingsClassificationsEnum[] classifications) {
        this.classifications = classifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String[] excludes;
    public WindowsUpdateSettings withExcludes(String[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusivePatches")
    public String[] exclusivePatches;
    public WindowsUpdateSettings withExclusivePatches(String[] exclusivePatches) {
        this.exclusivePatches = exclusivePatches;
        return this;
    }
}
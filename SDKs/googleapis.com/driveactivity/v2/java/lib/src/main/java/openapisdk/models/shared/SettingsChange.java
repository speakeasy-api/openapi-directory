package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SettingsChange
 * Information about settings changes.
**/
public class SettingsChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictionChanges")
    public RestrictionChange[] restrictionChanges;
    public SettingsChange withRestrictionChanges(RestrictionChange[] restrictionChanges) {
        this.restrictionChanges = restrictionChanges;
        return this;
    }
}
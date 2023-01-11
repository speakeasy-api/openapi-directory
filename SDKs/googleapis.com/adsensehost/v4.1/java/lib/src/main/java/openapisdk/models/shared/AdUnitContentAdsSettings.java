package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnitContentAdsSettings
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
**/
public class AdUnitContentAdsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupOption")
    public AdUnitContentAdsSettingsBackupOption backupOption;
    public AdUnitContentAdsSettings withBackupOption(AdUnitContentAdsSettingsBackupOption backupOption) {
        this.backupOption = backupOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AdUnitContentAdsSettings withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AdUnitContentAdsSettings withType(String type) {
        this.type = type;
        return this;
    }
}
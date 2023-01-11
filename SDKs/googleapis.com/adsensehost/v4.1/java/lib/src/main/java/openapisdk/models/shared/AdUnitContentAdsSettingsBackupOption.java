package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnitContentAdsSettingsBackupOption
 * The backup option to be used in instances where no ad is available.
**/
public class AdUnitContentAdsSettingsBackupOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public AdUnitContentAdsSettingsBackupOption withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AdUnitContentAdsSettingsBackupOption withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AdUnitContentAdsSettingsBackupOption withUrl(String url) {
        this.url = url;
        return this;
    }
}
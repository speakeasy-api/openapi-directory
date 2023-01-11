package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentAdsSettings
 * Settings specific to content ads (AFC).
**/
public class ContentAdsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public ContentAdsSettings withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ContentAdsSettingsTypeEnum type;
    public ContentAdsSettings withType(ContentAdsSettingsTypeEnum type) {
        this.type = type;
        return this;
    }
}
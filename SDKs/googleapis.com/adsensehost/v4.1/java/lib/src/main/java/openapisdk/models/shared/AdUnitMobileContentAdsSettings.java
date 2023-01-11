package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnitMobileContentAdsSettings
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
**/
public class AdUnitMobileContentAdsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markupLanguage")
    public String markupLanguage;
    public AdUnitMobileContentAdsSettings withMarkupLanguage(String markupLanguage) {
        this.markupLanguage = markupLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptingLanguage")
    public String scriptingLanguage;
    public AdUnitMobileContentAdsSettings withScriptingLanguage(String scriptingLanguage) {
        this.scriptingLanguage = scriptingLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AdUnitMobileContentAdsSettings withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AdUnitMobileContentAdsSettings withType(String type) {
        this.type = type;
        return this;
    }
}
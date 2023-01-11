package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AdUnit withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentAdsSettings")
    public AdUnitContentAdsSettings contentAdsSettings;
    public AdUnit withContentAdsSettings(AdUnitContentAdsSettings contentAdsSettings) {
        this.contentAdsSettings = contentAdsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customStyle")
    public AdStyle customStyle;
    public AdUnit withCustomStyle(AdStyle customStyle) {
        this.customStyle = customStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AdUnit withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdUnit withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileContentAdsSettings")
    public AdUnitMobileContentAdsSettings mobileContentAdsSettings;
    public AdUnit withMobileContentAdsSettings(AdUnitMobileContentAdsSettings mobileContentAdsSettings) {
        this.mobileContentAdsSettings = mobileContentAdsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdUnit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AdUnit withStatus(String status) {
        this.status = status;
        return this;
    }
}
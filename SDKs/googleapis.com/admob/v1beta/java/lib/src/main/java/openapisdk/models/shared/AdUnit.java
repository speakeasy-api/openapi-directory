package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnit
 * Describes an AdMob ad unit.
**/
public class AdUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adFormat")
    public String adFormat;
    public AdUnit withAdFormat(String adFormat) {
        this.adFormat = adFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTypes")
    public String[] adTypes;
    public AdUnit withAdTypes(String[] adTypes) {
        this.adTypes = adTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adUnitId")
    public String adUnitId;
    public AdUnit withAdUnitId(String adUnitId) {
        this.adUnitId = adUnitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public AdUnit withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AdUnit withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdUnit withName(String name) {
        this.name = name;
        return this;
    }
}
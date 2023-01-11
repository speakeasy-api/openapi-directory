package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaConversionEvent
 * A conversion event in a Google Analytics property.
**/
public class GoogleAnalyticsAdminV1betaConversionEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAnalyticsAdminV1betaConversionEvent withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Boolean custom;
    public GoogleAnalyticsAdminV1betaConversionEvent withCustom(Boolean custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletable")
    public Boolean deletable;
    public GoogleAnalyticsAdminV1betaConversionEvent withDeletable(Boolean deletable) {
        this.deletable = deletable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventName")
    public String eventName;
    public GoogleAnalyticsAdminV1betaConversionEvent withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaConversionEvent withName(String name) {
        this.name = name;
        return this;
    }
}
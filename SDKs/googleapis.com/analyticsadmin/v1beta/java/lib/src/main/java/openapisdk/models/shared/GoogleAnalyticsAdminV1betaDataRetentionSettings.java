package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataRetentionSettings
 * Settings values for data retention. This is a singleton resource.
**/
public class GoogleAnalyticsAdminV1betaDataRetentionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDataRetention")
    public GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum eventDataRetention;
    public GoogleAnalyticsAdminV1betaDataRetentionSettings withEventDataRetention(GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum eventDataRetention) {
        this.eventDataRetention = eventDataRetention;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaDataRetentionSettings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetUserDataOnNewActivity")
    public Boolean resetUserDataOnNewActivity;
    public GoogleAnalyticsAdminV1betaDataRetentionSettings withResetUserDataOnNewActivity(Boolean resetUserDataOnNewActivity) {
        this.resetUserDataOnNewActivity = resetUserDataOnNewActivity;
        return this;
    }
}
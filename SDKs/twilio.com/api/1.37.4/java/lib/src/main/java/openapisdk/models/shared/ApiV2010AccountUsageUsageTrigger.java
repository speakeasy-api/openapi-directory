package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountUsageUsageTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountUsageUsageTrigger withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountUsageUsageTrigger withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_method")
    public ApiV2010AccountUsageUsageTriggerCallbackMethodEnum callbackMethod;
    public ApiV2010AccountUsageUsageTrigger withCallbackMethod(ApiV2010AccountUsageUsageTriggerCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public ApiV2010AccountUsageUsageTrigger withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_value")
    public String currentValue;
    public ApiV2010AccountUsageUsageTrigger withCurrentValue(String currentValue) {
        this.currentValue = currentValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountUsageUsageTrigger withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_fired")
    public String dateFired;
    public ApiV2010AccountUsageUsageTrigger withDateFired(String dateFired) {
        this.dateFired = dateFired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountUsageUsageTrigger withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountUsageUsageTrigger withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurring")
    public UsageTriggerEnumRecurringEnum recurring;
    public ApiV2010AccountUsageUsageTrigger withRecurring(UsageTriggerEnumRecurringEnum recurring) {
        this.recurring = recurring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountUsageUsageTrigger withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_by")
    public UsageTriggerEnumTriggerFieldEnum triggerBy;
    public ApiV2010AccountUsageUsageTrigger withTriggerBy(UsageTriggerEnumTriggerFieldEnum triggerBy) {
        this.triggerBy = triggerBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_value")
    public String triggerValue;
    public ApiV2010AccountUsageUsageTrigger withTriggerValue(String triggerValue) {
        this.triggerValue = triggerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountUsageUsageTrigger withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_category")
    public UsageTriggerEnumUsageCategoryEnum usageCategory;
    public ApiV2010AccountUsageUsageTrigger withUsageCategory(UsageTriggerEnumUsageCategoryEnum usageCategory) {
        this.usageCategory = usageCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_record_uri")
    public String usageRecordUri;
    public ApiV2010AccountUsageUsageTrigger withUsageRecordUri(String usageRecordUri) {
        this.usageRecordUri = usageRecordUri;
        return this;
    }
}
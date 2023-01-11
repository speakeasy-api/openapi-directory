package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageTriggerCreateUsageTriggerRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum callbackMethod;
    public CreateUsageTriggerCreateUsageTriggerRequest withCallbackMethod(CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateUsageTriggerCreateUsageTriggerRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateUsageTriggerCreateUsageTriggerRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Recurring")
    public openapisdk.models.shared.UsageTriggerEnumRecurringEnum recurring;
    public CreateUsageTriggerCreateUsageTriggerRequest withRecurring(openapisdk.models.shared.UsageTriggerEnumRecurringEnum recurring) {
        this.recurring = recurring;
        return this;
    }
    @SpeakeasyMetadata("form:name=TriggerBy")
    public openapisdk.models.shared.UsageTriggerEnumTriggerFieldEnum triggerBy;
    public CreateUsageTriggerCreateUsageTriggerRequest withTriggerBy(openapisdk.models.shared.UsageTriggerEnumTriggerFieldEnum triggerBy) {
        this.triggerBy = triggerBy;
        return this;
    }
    @SpeakeasyMetadata("form:name=TriggerValue")
    public String triggerValue;
    public CreateUsageTriggerCreateUsageTriggerRequest withTriggerValue(String triggerValue) {
        this.triggerValue = triggerValue;
        return this;
    }
    @SpeakeasyMetadata("form:name=UsageCategory")
    public openapisdk.models.shared.UsageTriggerEnumUsageCategoryEnum usageCategory;
    public CreateUsageTriggerCreateUsageTriggerRequest withUsageCategory(openapisdk.models.shared.UsageTriggerEnumUsageCategoryEnum usageCategory) {
        this.usageCategory = usageCategory;
        return this;
    }
}
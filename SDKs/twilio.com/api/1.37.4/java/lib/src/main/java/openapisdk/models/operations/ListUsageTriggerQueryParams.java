package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageTriggerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageTriggerQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Recurring")
    public openapisdk.models.shared.UsageTriggerEnumRecurringEnum recurring;
    public ListUsageTriggerQueryParams withRecurring(openapisdk.models.shared.UsageTriggerEnumRecurringEnum recurring) {
        this.recurring = recurring;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TriggerBy")
    public openapisdk.models.shared.UsageTriggerEnumTriggerFieldEnum triggerBy;
    public ListUsageTriggerQueryParams withTriggerBy(openapisdk.models.shared.UsageTriggerEnumTriggerFieldEnum triggerBy) {
        this.triggerBy = triggerBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UsageCategory")
    public openapisdk.models.shared.UsageTriggerEnumUsageCategoryEnum usageCategory;
    public ListUsageTriggerQueryParams withUsageCategory(openapisdk.models.shared.UsageTriggerEnumUsageCategoryEnum usageCategory) {
        this.usageCategory = usageCategory;
        return this;
    }
}
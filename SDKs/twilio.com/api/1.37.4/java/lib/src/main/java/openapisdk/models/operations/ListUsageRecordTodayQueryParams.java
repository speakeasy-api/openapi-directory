package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordTodayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Category")
    public openapisdk.models.shared.UsageRecordTodayEnumCategoryEnum category;
    public ListUsageRecordTodayQueryParams withCategory(openapisdk.models.shared.UsageRecordTodayEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public LocalDate endDate;
    public ListUsageRecordTodayQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public ListUsageRecordTodayQueryParams withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordTodayQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public LocalDate startDate;
    public ListUsageRecordTodayQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
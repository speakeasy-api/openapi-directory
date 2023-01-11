package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordYearlyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Category")
    public openapisdk.models.shared.UsageRecordYearlyEnumCategoryEnum category;
    public ListUsageRecordYearlyQueryParams withCategory(openapisdk.models.shared.UsageRecordYearlyEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public LocalDate endDate;
    public ListUsageRecordYearlyQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public ListUsageRecordYearlyQueryParams withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordYearlyQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public LocalDate startDate;
    public ListUsageRecordYearlyQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
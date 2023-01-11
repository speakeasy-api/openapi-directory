package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordLastMonthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Category")
    public openapisdk.models.shared.UsageRecordLastMonthEnumCategoryEnum category;
    public ListUsageRecordLastMonthQueryParams withCategory(openapisdk.models.shared.UsageRecordLastMonthEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public LocalDate endDate;
    public ListUsageRecordLastMonthQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public ListUsageRecordLastMonthQueryParams withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordLastMonthQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public LocalDate startDate;
    public ListUsageRecordLastMonthQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
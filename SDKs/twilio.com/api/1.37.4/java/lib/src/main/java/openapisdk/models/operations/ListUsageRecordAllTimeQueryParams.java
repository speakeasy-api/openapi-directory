package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordAllTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Category")
    public openapisdk.models.shared.UsageRecordAllTimeEnumCategoryEnum category;
    public ListUsageRecordAllTimeQueryParams withCategory(openapisdk.models.shared.UsageRecordAllTimeEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public LocalDate endDate;
    public ListUsageRecordAllTimeQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public ListUsageRecordAllTimeQueryParams withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordAllTimeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public LocalDate startDate;
    public ListUsageRecordAllTimeQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Category")
    public openapisdk.models.shared.UsageRecordEnumCategoryEnum category;
    public ListUsageRecordQueryParams withCategory(openapisdk.models.shared.UsageRecordEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public LocalDate endDate;
    public ListUsageRecordQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public ListUsageRecordQueryParams withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public LocalDate startDate;
    public ListUsageRecordQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}
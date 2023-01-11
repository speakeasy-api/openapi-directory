package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountUsageRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=End")
    public OffsetDateTime end;
    public ListAccountUsageRecordQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Granularity")
    public openapisdk.models.shared.AccountUsageRecordEnumGranularityEnum granularity;
    public ListAccountUsageRecordQueryParams withGranularity(openapisdk.models.shared.AccountUsageRecordEnumGranularityEnum granularity) {
        this.granularity = granularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAccountUsageRecordQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Start")
    public OffsetDateTime start;
    public ListAccountUsageRecordQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}
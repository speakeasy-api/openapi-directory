package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=End")
    public OffsetDateTime end;
    public ListUsageRecordQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Granularity")
    public openapisdk.models.shared.UsageRecordEnumGranularityEnum granularity;
    public ListUsageRecordQueryParams withGranularity(openapisdk.models.shared.UsageRecordEnumGranularityEnum granularity) {
        this.granularity = granularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Start")
    public OffsetDateTime start;
    public ListUsageRecordQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}
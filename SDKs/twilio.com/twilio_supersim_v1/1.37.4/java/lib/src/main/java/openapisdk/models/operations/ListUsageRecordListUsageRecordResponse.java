package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsageRecordListUsageRecordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUsageRecordListUsageRecordResponseMeta meta;
    public ListUsageRecordListUsageRecordResponse withMeta(ListUsageRecordListUsageRecordResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_records")
    public openapisdk.models.shared.SupersimV1UsageRecord[] usageRecords;
    public ListUsageRecordListUsageRecordResponse withUsageRecords(openapisdk.models.shared.SupersimV1UsageRecord[] usageRecords) {
        this.usageRecords = usageRecords;
        return this;
    }
}
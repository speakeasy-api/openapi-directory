package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountUsageRecordListAccountUsageRecordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAccountUsageRecordListAccountUsageRecordResponseMeta meta;
    public ListAccountUsageRecordListAccountUsageRecordResponse withMeta(ListAccountUsageRecordListAccountUsageRecordResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_records")
    public openapisdk.models.shared.WirelessV1AccountUsageRecord[] usageRecords;
    public ListAccountUsageRecordListAccountUsageRecordResponse withUsageRecords(openapisdk.models.shared.WirelessV1AccountUsageRecord[] usageRecords) {
        this.usageRecords = usageRecords;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIpRecordListIpRecordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_records")
    public openapisdk.models.shared.VoiceV1IpRecord[] ipRecords;
    public ListIpRecordListIpRecordResponse withIpRecords(openapisdk.models.shared.VoiceV1IpRecord[] ipRecords) {
        this.ipRecords = ipRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListIpRecordListIpRecordResponseMeta meta;
    public ListIpRecordListIpRecordResponse withMeta(ListIpRecordListIpRecordResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}
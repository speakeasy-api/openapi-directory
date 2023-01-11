package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataSessionListDataSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_sessions")
    public openapisdk.models.shared.WirelessV1SimDataSession[] dataSessions;
    public ListDataSessionListDataSessionResponse withDataSessions(openapisdk.models.shared.WirelessV1SimDataSession[] dataSessions) {
        this.dataSessions = dataSessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDataSessionListDataSessionResponseMeta meta;
    public ListDataSessionListDataSessionResponse withMeta(ListDataSessionListDataSessionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDayListDayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("days")
    public openapisdk.models.shared.BulkexportsV1ExportDay[] days;
    public ListDayListDayResponse withDays(openapisdk.models.shared.BulkexportsV1ExportDay[] days) {
        this.days = days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDayListDayResponseMeta meta;
    public ListDayListDayResponse withMeta(ListDayListDayResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Interval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change")
    public Double change;
    public Interval withChange(Double change) {
        this.change = change;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changePercent")
    public Double changePercent;
    public Interval withChangePercent(Double changePercent) {
        this.changePercent = changePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public Interval withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public Double high;
    public Interval withHigh(Double high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public Double last;
    public Interval withLast(Double last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low")
    public Double low;
    public Interval withLow(Double low) {
        this.low = low;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open")
    public Double open;
    public Interval withOpen(Double open) {
        this.open = open;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public Interval withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}
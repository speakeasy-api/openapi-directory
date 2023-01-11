package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyUsageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyCount")
    public KeyUsageDailyCountEpoch[] dailyCount;
    public KeyUsageResult withDailyCount(KeyUsageDailyCountEpoch[] dailyCount) {
        this.dailyCount = dailyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public KeyUsageResult withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public KeyUsageResult withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public KeyUsageResult withTotal(Integer total) {
        this.total = total;
        return this;
    }
}
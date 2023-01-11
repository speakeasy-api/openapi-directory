package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pacing
 * Settings that control the rate at which a budget is spent.
**/
public class Pacing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyMaxImpressions")
    public String dailyMaxImpressions;
    public Pacing withDailyMaxImpressions(String dailyMaxImpressions) {
        this.dailyMaxImpressions = dailyMaxImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyMaxMicros")
    public String dailyMaxMicros;
    public Pacing withDailyMaxMicros(String dailyMaxMicros) {
        this.dailyMaxMicros = dailyMaxMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacingPeriod")
    public PacingPacingPeriodEnum pacingPeriod;
    public Pacing withPacingPeriod(PacingPacingPeriodEnum pacingPeriod) {
        this.pacingPeriod = pacingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pacingType")
    public PacingPacingTypeEnum pacingType;
    public Pacing withPacingType(PacingPacingTypeEnum pacingType) {
        this.pacingType = pacingType;
        return this;
    }
}
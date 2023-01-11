package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatsResponse
 * A third party stats resource.
**/
public class StatsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_session_length_minutes")
    public Float avgSessionLengthMinutes;
    public StatsResponse withAvgSessionLengthMinutes(Float avgSessionLengthMinutes) {
        this.avgSessionLengthMinutes = avgSessionLengthMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("churn_probability")
    public Float churnProbability;
    public StatsResponse withChurnProbability(Float churnProbability) {
        this.churnProbability = churnProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("days_since_last_played")
    public Integer daysSinceLastPlayed;
    public StatsResponse withDaysSinceLastPlayed(Integer daysSinceLastPlayed) {
        this.daysSinceLastPlayed = daysSinceLastPlayed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high_spender_probability")
    public Float highSpenderProbability;
    public StatsResponse withHighSpenderProbability(Float highSpenderProbability) {
        this.highSpenderProbability = highSpenderProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public StatsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_purchases")
    public Integer numPurchases;
    public StatsResponse withNumPurchases(Integer numPurchases) {
        this.numPurchases = numPurchases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_sessions")
    public Integer numSessions;
    public StatsResponse withNumSessions(Integer numSessions) {
        this.numSessions = numSessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_sessions_percentile")
    public Float numSessionsPercentile;
    public StatsResponse withNumSessionsPercentile(Float numSessionsPercentile) {
        this.numSessionsPercentile = numSessionsPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spend_percentile")
    public Float spendPercentile;
    public StatsResponse withSpendPercentile(Float spendPercentile) {
        this.spendPercentile = spendPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spend_probability")
    public Float spendProbability;
    public StatsResponse withSpendProbability(Float spendProbability) {
        this.spendProbability = spendProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_spend_next_28_days")
    public Float totalSpendNext28Days;
    public StatsResponse withTotalSpendNext28Days(Float totalSpendNext28Days) {
        this.totalSpendNext28Days = totalSpendNext28Days;
        return this;
    }
}
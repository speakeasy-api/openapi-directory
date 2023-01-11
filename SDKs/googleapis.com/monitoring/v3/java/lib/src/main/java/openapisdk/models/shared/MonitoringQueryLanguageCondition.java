package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitoringQueryLanguageCondition
 * A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
**/
public class MonitoringQueryLanguageCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public MonitoringQueryLanguageCondition withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMissingData")
    public MonitoringQueryLanguageConditionEvaluationMissingDataEnum evaluationMissingData;
    public MonitoringQueryLanguageCondition withEvaluationMissingData(MonitoringQueryLanguageConditionEvaluationMissingDataEnum evaluationMissingData) {
        this.evaluationMissingData = evaluationMissingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public MonitoringQueryLanguageCondition withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public Trigger trigger;
    public MonitoringQueryLanguageCondition withTrigger(Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}
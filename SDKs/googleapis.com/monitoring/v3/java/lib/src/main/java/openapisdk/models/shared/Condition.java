package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Condition
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
**/
public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionAbsent")
    public MetricAbsence conditionAbsent;
    public Condition withConditionAbsent(MetricAbsence conditionAbsent) {
        this.conditionAbsent = conditionAbsent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionMatchedLog")
    public LogMatch conditionMatchedLog;
    public Condition withConditionMatchedLog(LogMatch conditionMatchedLog) {
        this.conditionMatchedLog = conditionMatchedLog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionMonitoringQueryLanguage")
    public MonitoringQueryLanguageCondition conditionMonitoringQueryLanguage;
    public Condition withConditionMonitoringQueryLanguage(MonitoringQueryLanguageCondition conditionMonitoringQueryLanguage) {
        this.conditionMonitoringQueryLanguage = conditionMonitoringQueryLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionThreshold")
    public MetricThreshold conditionThreshold;
    public Condition withConditionThreshold(MetricThreshold conditionThreshold) {
        this.conditionThreshold = conditionThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Condition withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Condition withName(String name) {
        this.name = name;
        return this;
    }
}
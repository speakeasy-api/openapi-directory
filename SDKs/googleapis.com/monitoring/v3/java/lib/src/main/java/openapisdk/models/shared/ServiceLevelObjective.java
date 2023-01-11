package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceLevelObjective
 * A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
**/
public class ServiceLevelObjective {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarPeriod")
    public ServiceLevelObjectiveCalendarPeriodEnum calendarPeriod;
    public ServiceLevelObjective withCalendarPeriod(ServiceLevelObjectiveCalendarPeriodEnum calendarPeriod) {
        this.calendarPeriod = calendarPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ServiceLevelObjective withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal")
    public Double goal;
    public ServiceLevelObjective withGoal(Double goal) {
        this.goal = goal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceLevelObjective withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollingPeriod")
    public String rollingPeriod;
    public ServiceLevelObjective withRollingPeriod(String rollingPeriod) {
        this.rollingPeriod = rollingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLevelIndicator")
    public ServiceLevelIndicator serviceLevelIndicator;
    public ServiceLevelObjective withServiceLevelIndicator(ServiceLevelIndicator serviceLevelIndicator) {
        this.serviceLevelIndicator = serviceLevelIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public ServiceLevelObjective withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}
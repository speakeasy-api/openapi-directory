import { SpeakeasyBase } from "../../../internal/utils";
import { LogMatch } from "./logmatch";
import { MetricAbsence } from "./metricabsence";
import { MetricThreshold } from "./metricthreshold";
import { MonitoringQueryLanguageCondition } from "./monitoringquerylanguagecondition";
/**
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
 */
export declare class Condition extends SpeakeasyBase {
    /**
     * A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
     */
    conditionAbsent?: MetricAbsence;
    /**
     * A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated.
     */
    conditionMatchedLog?: LogMatch;
    /**
     * A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
     */
    conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;
    /**
     * A condition type that compares a collection of time series against a threshold.
     */
    conditionThreshold?: MetricThreshold;
    /**
     * A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy.
     */
    displayName?: string;
    /**
     * Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Cloud Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Cloud Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted.
     */
    name?: string;
}

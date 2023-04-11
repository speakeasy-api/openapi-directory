import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResource } from "./monitoredresource";
/**
 * A widget that displays a list of incidents
 */
export declare class IncidentList extends SpeakeasyBase {
    /**
     * Optional. The monitored resource for which incidents are listed. The resource doesn't need to be fully specified. That is, you can specify the resource type but not the values of the resource labels. The resource type and labels are used for filtering.
     */
    monitoredResources?: MonitoredResource[];
    /**
     * Optional. A list of alert policy names to filter the incident list by. Don't include the project ID prefix in the policy name. For example, use alertPolicies/utilization.
     */
    policyNames?: string[];
}

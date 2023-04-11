import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied.
 */
export declare class Criteria extends SpeakeasyBase {
    /**
     * The specific AlertPolicy names for the alert that should be snoozed. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID] There is a limit of 16 policies per snooze. This limit is checked during snooze creation.
     */
    policies?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class Team extends SpeakeasyBase {
    /**
     * For internal use only. This field does not comply with our backwards compatability policies.
     */
    privateFields?: Record<string, any>;
    /**
     * Whether team members are allowed to have automated email steps
     */
    allowAutomatedEmailSteps?: boolean;
    /**
     * Whether all call recording is disabled
     */
    callRecordingDisabled?: boolean;
    /**
     * The team default for click tracking when composing emails
     */
    clickTrackingDefault?: boolean;
    /**
     * Datetime of when the team was created
     */
    createdAt?: Date;
    /**
     * The domain click and open tracking will be proxied through
     */
    customTrackingDomain?: string;
    /**
     * Indicates if the team has been deactivated
     */
    deactivated?: boolean;
    /**
     * Whether team members are required to mark disposition at the end of calls
     */
    dispositionsRequired?: boolean;
    /**
     * Daily email limit for each member on the team
     */
    emailDailyLimit?: number;
    /**
     * Visibility setting for resources across the team. Possible values are: group_public, all_public.
     *
     * @remarks
     * When the value is group_public, certain resources will only be visible to members of the same group.
     * When the value is all_public, all resources are visible to all users on this team.
     *
     */
    groupPrivacySetting?: string;
    /**
     * Team ID
     */
    id?: number;
    /**
     * Count of seats that this team has licensed
     */
    licenseLimit?: number;
    /**
     * Whether this team has local dial enabled
     */
    localDialEnabled?: boolean;
    /**
     * Team name
     */
    name?: string;
    /**
     * Plan type of the team, Possible values are: group, professional, enterprise
     */
    plan?: string;
    /**
     * Add on features for this team
     */
    planFeatures?: Record<string, any>;
    /**
     * Whether calls will record by default
     */
    recordByDefault?: boolean;
    /**
     * Whether team members are required to log sentiments
     */
    sentimentsRequired?: boolean;
    /**
     * The default visibility of resources on the team, in the UI only. The API does not utilize this default.
     *
     * @remarks
     * Possible values are: public, private.
     *
     */
    teamVisibilityDefault?: string;
    /**
     * Datetime of when the team was last updated
     */
    updatedAt?: Date;
}

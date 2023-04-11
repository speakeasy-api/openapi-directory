import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoalEventDetailsEventConditions extends SpeakeasyBase {
    /**
     * Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.
     */
    comparisonType?: string;
    /**
     * Value used for this comparison.
     */
    comparisonValue?: string;
    /**
     * Expression used for this match.
     */
    expression?: string;
    /**
     * Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.
     */
    matchType?: string;
    /**
     * Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.
     */
    type?: string;
}
/**
 * Details for the goal of the type EVENT.
 */
export declare class GoalEventDetails extends SpeakeasyBase {
    /**
     * List of event conditions.
     */
    eventConditions?: GoalEventDetailsEventConditions[];
    /**
     * Determines if the event value should be used as the value for this goal.
     */
    useEventValue?: boolean;
}
/**
 * Parent link for a goal. Points to the view (profile) to which this goal belongs.
 */
export declare class GoalParentLink extends SpeakeasyBase {
    /**
     * Link to the view (profile) to which this goal belongs.
     */
    href?: string;
    /**
     * Value is "analytics#profile".
     */
    type?: string;
}
export declare class GoalUrlDestinationDetailsSteps extends SpeakeasyBase {
    /**
     * Step name.
     */
    name?: string;
    /**
     * Step number.
     */
    number?: number;
    /**
     * URL for this step.
     */
    url?: string;
}
/**
 * Details for the goal of the type URL_DESTINATION.
 */
export declare class GoalUrlDestinationDetails extends SpeakeasyBase {
    /**
     * Determines if the goal URL must exactly match the capitalization of visited URLs.
     */
    caseSensitive?: boolean;
    /**
     * Determines if the first step in this goal is required.
     */
    firstStepRequired?: boolean;
    /**
     * Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.
     */
    matchType?: string;
    /**
     * List of steps configured for this goal funnel.
     */
    steps?: GoalUrlDestinationDetailsSteps[];
    /**
     * URL for this goal.
     */
    url?: string;
}
/**
 * Details for the goal of the type VISIT_NUM_PAGES.
 */
export declare class GoalVisitNumPagesDetails extends SpeakeasyBase {
    /**
     * Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.
     */
    comparisonType?: string;
    /**
     * Value used for this comparison.
     */
    comparisonValue?: string;
}
/**
 * Details for the goal of the type VISIT_TIME_ON_SITE.
 */
export declare class GoalVisitTimeOnSiteDetails extends SpeakeasyBase {
    /**
     * Type of comparison. Possible values are LESS_THAN or GREATER_THAN.
     */
    comparisonType?: string;
    /**
     * Value used for this comparison.
     */
    comparisonValue?: string;
}
/**
 * JSON template for Analytics goal resource.
 */
export declare class Goal extends SpeakeasyBase {
    /**
     * Account ID to which this goal belongs.
     */
    accountId?: string;
    /**
     * Determines whether this goal is active.
     */
    active?: boolean;
    /**
     * Time this goal was created.
     */
    created?: Date;
    /**
     * Details for the goal of the type EVENT.
     */
    eventDetails?: GoalEventDetails;
    /**
     * Goal ID.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this goal belongs.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for an Analytics goal.
     */
    kind?: string;
    /**
     * Goal name.
     */
    name?: string;
    /**
     * Parent link for a goal. Points to the view (profile) to which this goal belongs.
     */
    parentLink?: GoalParentLink;
    /**
     * View (Profile) ID to which this goal belongs.
     */
    profileId?: string;
    /**
     * Link for this goal.
     */
    selfLink?: string;
    /**
     * Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
     */
    type?: string;
    /**
     * Time this goal was last modified.
     */
    updated?: Date;
    /**
     * Details for the goal of the type URL_DESTINATION.
     */
    urlDestinationDetails?: GoalUrlDestinationDetails;
    /**
     * Goal value.
     */
    value?: number;
    /**
     * Details for the goal of the type VISIT_NUM_PAGES.
     */
    visitNumPagesDetails?: GoalVisitNumPagesDetails;
    /**
     * Details for the goal of the type VISIT_TIME_ON_SITE.
     */
    visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;
    /**
     * Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
     */
    webPropertyId?: string;
}

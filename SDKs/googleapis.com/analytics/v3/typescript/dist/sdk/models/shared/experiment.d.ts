import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
 */
export declare class ExperimentParentLink extends SpeakeasyBase {
    /**
     * Link to the view (profile) to which this experiment belongs. This field is read-only.
     */
    href?: string;
    /**
     * Value is "analytics#profile". This field is read-only.
     */
    type?: string;
}
export declare class ExperimentVariations extends SpeakeasyBase {
    /**
     * The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.
     */
    name?: string;
    /**
     * Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.
     */
    status?: string;
    /**
     * The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.
     */
    url?: string;
    /**
     * Weight that this variation should receive. Only present if the experiment is running. This field is read-only.
     */
    weight?: number;
    /**
     * True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.
     */
    won?: boolean;
}
/**
 * JSON template for Analytics experiment resource.
 */
export declare class Experiment extends SpeakeasyBase {
    /**
     * Account ID to which this experiment belongs. This field is read-only.
     */
    accountId?: string;
    /**
     * Time the experiment was created. This field is read-only.
     */
    created?: Date;
    /**
     * Notes about this experiment.
     */
    description?: string;
    /**
     * If true, the end user will be able to edit the experiment via the Google Analytics user interface.
     */
    editableInGaUi?: boolean;
    /**
     * The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
     */
    endTime?: Date;
    /**
     * Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
     */
    equalWeighting?: boolean;
    /**
     * Experiment ID. Required for patch and update. Disallowed for create.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this experiment belongs. This field is read-only.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for an Analytics experiment. This field is read-only.
     */
    kind?: string;
    /**
     * An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
     */
    minimumExperimentLengthInDays?: number;
    /**
     * Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
     */
    name?: string;
    /**
     * The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
     */
    objectiveMetric?: string;
    /**
     * Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
     */
    optimizationType?: string;
    /**
     * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
     */
    parentLink?: ExperimentParentLink;
    /**
     * View (Profile) ID to which this experiment belongs. This field is read-only.
     */
    profileId?: string;
    /**
     * Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
     */
    reasonExperimentEnded?: string;
    /**
     * Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
     */
    rewriteVariationUrlsAsOriginal?: boolean;
    /**
     * Link for this experiment. This field is read-only.
     */
    selfLink?: string;
    /**
     * The framework used to serve the experiment variations and evaluate the results. One of:
     *
     * @remarks
     * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
     * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
     * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
     */
    servingFramework?: string;
    /**
     * The snippet of code to include on the control page(s). This field is read-only.
     */
    snippet?: string;
    /**
     * The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
     */
    startTime?: Date;
    /**
     * Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
     */
    status?: string;
    /**
     * A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
     */
    trafficCoverage?: number;
    /**
     * Time the experiment was last modified. This field is read-only.
     */
    updated?: Date;
    /**
     * Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
     */
    variations?: ExperimentVariations[];
    /**
     * Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
     */
    webPropertyId?: string;
    /**
     * A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
     */
    winnerConfidenceLevel?: number;
    /**
     * Boolean specifying whether a winner has been found for this experiment. This field is read-only.
     */
    winnerFound?: boolean;
}

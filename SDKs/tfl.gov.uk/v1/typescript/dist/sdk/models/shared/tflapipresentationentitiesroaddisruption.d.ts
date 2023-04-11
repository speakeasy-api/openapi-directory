import { SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
import { TflApiPresentationEntitiesRoadDisruptionImpactArea } from "./tflapipresentationentitiesroaddisruptionimpactarea";
import { TflApiPresentationEntitiesRoadDisruptionLine } from "./tflapipresentationentitiesroaddisruptionline";
import { TflApiPresentationEntitiesRoadDisruptionSchedule } from "./tflapipresentationentitiesroaddisruptionschedule";
import { TflApiPresentationEntitiesRoadProject } from "./tflapipresentationentitiesroadproject";
import { TflApiPresentationEntitiesStreet } from "./tflapipresentationentitiesstreet";
/**
 * OK
 */
export declare class TflApiPresentationEntitiesRoadDisruption extends SpeakeasyBase {
    /**
     * Describes the nature of disruption e.g. Traffic Incidents, Works
     */
    category?: string;
    /**
     * Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate.
     */
    comments?: string;
    /**
     * The Ids of affected corridors, if any.
     */
    corridorIds?: string[];
    /**
     * Text of the most recent update from the LSTCC on the state of the
     *
     * @remarks
     *              disruption, including the current traffic impact and any advice to
     *              road users.
     */
    currentUpdate?: string;
    /**
     * The time when the last CurrentUpdate description was recorded,
     *
     * @remarks
     *             or null if no CurrentUpdate has been applied.
     */
    currentUpdateDateTime?: Date;
    /**
     * The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned
     *
     * @remarks
     *             disruptions in progress, this field will be omitted.
     */
    endDateTime?: Date;
    geography?: SystemDataSpatialDbGeography;
    geometry?: SystemDataSpatialDbGeography;
    /**
     * True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a
     *
     * @remarks
     *             Severe or Serious disruption for severity filtering purposes.
     */
    hasClosures?: boolean;
    /**
     * Unique identifier for the road disruption
     */
    id?: string;
    /**
     * True if the disruption is planned on a future date that is open to change
     */
    isProvisional?: boolean;
    /**
     * The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly
     *
     * @remarks
     *             compare two instances of the same disruption to determine if it has been changed.
     */
    lastModifiedTime?: Date;
    /**
     * This describes the level of potential impact on traffic operations of the disruption.
     *
     * @remarks
     *             High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention
     *             Medium = This is the default value
     *             Low = e.g. a frequently occurring disruption which is well known
     */
    levelOfInterest?: string;
    /**
     * The text of any associated link
     */
    linkText?: string;
    /**
     * The url of any associated link
     */
    linkUrl?: string;
    /**
     * Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited.
     */
    location?: string;
    /**
     * An ordinal of the disruption based on severity, level of interest and corridor.
     */
    ordinal?: number;
    /**
     * Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string.
     */
    point?: string;
    publishEndDate?: Date;
    /**
     * TDM Additional properties
     */
    publishStartDate?: Date;
    recurringSchedules?: TflApiPresentationEntitiesRoadDisruptionSchedule[];
    roadDisruptionImpactAreas?: TflApiPresentationEntitiesRoadDisruptionImpactArea[];
    roadDisruptionLines?: TflApiPresentationEntitiesRoadDisruptionLine[];
    roadProject?: TflApiPresentationEntitiesRoadProject;
    /**
     * A description of the severity of the disruption.
     */
    severity?: string;
    /**
     * The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
     *
     * @remarks
     *             For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.
     */
    startDateTime?: Date;
    /**
     * This describes the status of the disruption.
     *
     * @remarks
     *             Active = currently in progress
     *             Active Long Term = currently in progress and long term
     *             Scheduled = scheduled to start within the next 180 days
     *             Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.
     *             Recently Cleared = recently cleared in the last 24 hours
     *             Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.
     */
    status?: string;
    /**
     * A collection of zero or more streets affected by the disruption.
     */
    streets?: TflApiPresentationEntitiesStreet[];
    /**
     * Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load
     */
    subCategory?: string;
    timeFrame?: string;
    /**
     * URL to retrieve this road disruption
     */
    url?: string;
}

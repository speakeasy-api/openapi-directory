import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesDisruptedRoute } from "./tflapipresentationentitiesdisruptedroute";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";
/**
 * Gets or sets the category of this dispruption.
 */
export declare enum TflApiPresentationEntitiesDisruptionCategoryEnum {
    Undefined = "Undefined",
    RealTime = "RealTime",
    PlannedWork = "PlannedWork",
    Information = "Information",
    Event = "Event",
    Crowding = "Crowding",
    StatusAlert = "StatusAlert"
}
/**
 * Represents a disruption to a route within the transport network.
 */
export declare class TflApiPresentationEntitiesDisruption extends SpeakeasyBase {
    /**
     * Gets or sets the additionaInfo of this disruption.
     */
    additionalInfo?: string;
    /**
     * Gets or sets the routes affected by this disruption
     */
    affectedRoutes?: TflApiPresentationEntitiesDisruptedRoute[];
    /**
     * Gets or sets the stops affected by this disruption
     */
    affectedStops?: TflApiPresentationEntitiesStopPoint[];
    /**
     * Gets or sets the category of this dispruption.
     */
    category?: TflApiPresentationEntitiesDisruptionCategoryEnum;
    /**
     * Gets or sets the description of the category.
     */
    categoryDescription?: string;
    /**
     * Text describing the closure type
     */
    closureText?: string;
    /**
     * Gets or sets the date/time when this disruption was created.
     */
    created?: Date;
    /**
     * Gets or sets the description of this disruption.
     */
    description?: string;
    /**
     * Gets or sets the date/time when this disruption was last updated.
     */
    lastUpdate?: Date;
    /**
     * Gets or sets the summary of this disruption.
     */
    summary?: string;
    /**
     * Gets or sets the disruption type of this dispruption.
     */
    type?: string;
}

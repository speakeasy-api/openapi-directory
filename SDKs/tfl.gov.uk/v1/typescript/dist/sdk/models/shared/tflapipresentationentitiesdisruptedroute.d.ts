import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSectionNaptanEntrySequence } from "./tflapipresentationentitiesroutesectionnaptanentrysequence";
/**
 * keep old RouteSection name so as not to break contract
 */
export declare class TflApiPresentationEntitiesDisruptedRoute extends SpeakeasyBase {
    /**
     * The name of the Destination StopPoint
     */
    destinationName?: string;
    /**
     * Inbound or Outbound
     */
    direction?: string;
    /**
     * The Id of the route
     */
    id?: string;
    /**
     * Whether this represents the entire route section
     */
    isEntireRouteSection?: boolean;
    /**
     * The Id of the Line
     */
    lineId?: string;
    /**
     * The co-ordinates of the route's path as a geoJSON lineString
     */
    lineString?: string;
    /**
     * Name such as "72"
     */
    name?: string;
    /**
     * The name of the Origin StopPoint
     */
    originationName?: string;
    /**
     * The route code
     */
    routeCode?: string;
    routeSectionNaptanEntrySequence?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[];
    /**
     * The DateTime that the Service containing this Route is valid from.
     */
    validFrom?: Date;
    /**
     * The DateTime that the Service containing this Route is valid until.
     */
    validTo?: Date;
    via?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence;
}

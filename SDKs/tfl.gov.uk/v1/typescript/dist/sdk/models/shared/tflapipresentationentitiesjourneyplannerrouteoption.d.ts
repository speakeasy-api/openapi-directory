import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
export declare class TflApiPresentationEntitiesJourneyPlannerRouteOption extends SpeakeasyBase {
    /**
     * The direction of the route, i.e. outbound or inbound.
     */
    direction?: string;
    directions?: string[];
    /**
     * The Id of the route
     */
    id?: string;
    lineIdentifier?: TflApiPresentationEntitiesIdentifier;
    /**
     * Name such as "72"
     */
    name?: string;
}

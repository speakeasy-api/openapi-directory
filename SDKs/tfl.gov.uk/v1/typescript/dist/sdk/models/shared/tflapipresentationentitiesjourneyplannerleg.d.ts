import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesInstruction } from "./tflapipresentationentitiesinstruction";
import { TflApiPresentationEntitiesJourneyPlannerObstacle } from "./tflapipresentationentitiesjourneyplannerobstacle";
import { TflApiPresentationEntitiesJourneyPlannerPath } from "./tflapipresentationentitiesjourneyplannerpath";
import { TflApiPresentationEntitiesJourneyPlannerPlannedWork } from "./tflapipresentationentitiesjourneyplannerplannedwork";
import { TflApiPresentationEntitiesJourneyPlannerRouteOption } from "./tflapipresentationentitiesjourneyplannerrouteoption";
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
export declare class TflApiPresentationEntitiesJourneyPlannerLeg extends SpeakeasyBase {
    /**
     * Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
     */
    arrivalPoint?: TflApiPresentationEntitiesPoint;
    arrivalTime?: Date;
    /**
     * Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
     */
    departurePoint?: TflApiPresentationEntitiesPoint;
    departureTime?: Date;
    disruptions?: TflApiPresentationEntitiesDisruption[];
    distance?: number;
    duration?: number;
    hasFixedLocations?: boolean;
    instruction?: TflApiPresentationEntitiesInstruction;
    interChangeDuration?: string;
    interChangePosition?: string;
    isDisrupted?: boolean;
    mode?: TflApiPresentationEntitiesIdentifier;
    obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[];
    path?: TflApiPresentationEntitiesJourneyPlannerPath;
    plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[];
    routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[];
    scheduledArrivalTime?: Date;
    scheduledDepartureTime?: Date;
    speed?: string;
}

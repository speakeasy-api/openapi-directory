import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerFare } from "./tflapipresentationentitiesjourneyplannerfare";
import { TflApiPresentationEntitiesJourneyPlannerFareCaveat } from "./tflapipresentationentitiesjourneyplannerfarecaveat";
export declare class TflApiPresentationEntitiesJourneyPlannerJourneyFare extends SpeakeasyBase {
    caveats?: TflApiPresentationEntitiesJourneyPlannerFareCaveat[];
    fares?: TflApiPresentationEntitiesJourneyPlannerFare[];
    totalCost?: number;
}

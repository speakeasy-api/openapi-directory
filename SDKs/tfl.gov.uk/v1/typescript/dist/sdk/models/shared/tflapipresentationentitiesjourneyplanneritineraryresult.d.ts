import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerJourney } from "./tflapipresentationentitiesjourneyplannerjourney";
import { TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData } from "./tflapipresentationentitiesjourneyplannerjourneyplannercyclehiredockingstationdata";
import { TflApiPresentationEntitiesJourneyPlannerJourneyVector } from "./tflapipresentationentitiesjourneyplannerjourneyvector";
import { TflApiPresentationEntitiesJourneyPlannerSearchCriteria } from "./tflapipresentationentitiesjourneyplannersearchcriteria";
import { TflApiPresentationEntitiesLine } from "./tflapipresentationentitiesline";
/**
 * A DTO representing a list of possible journeys.
 */
export declare class TflApiPresentationEntitiesJourneyPlannerItineraryResult extends SpeakeasyBase {
    cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;
    journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;
    journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[];
    lines?: TflApiPresentationEntitiesLine[];
    recommendedMaxAgeMinutes?: number;
    searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;
    stopMessages?: string[];
}

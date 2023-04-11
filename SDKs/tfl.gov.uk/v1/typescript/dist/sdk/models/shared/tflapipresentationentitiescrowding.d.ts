import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPassengerFlow } from "./tflapipresentationentitiespassengerflow";
import { TflApiPresentationEntitiesTrainLoading } from "./tflapipresentationentitiestrainloading";
export declare class TflApiPresentationEntitiesCrowding extends SpeakeasyBase {
    /**
     * Busiest times at a station (static information)
     */
    passengerFlows?: TflApiPresentationEntitiesPassengerFlow[];
    /**
     * Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information)
     */
    trainLoadings?: TflApiPresentationEntitiesTrainLoading[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesOrderedRoute } from "./tflapipresentationentitiesorderedroute";
import { TflApiPresentationEntitiesStopPointSequence } from "./tflapipresentationentitiesstoppointsequence";
/**
 * OK
 */
export declare class TflApiPresentationEntitiesRouteSequence extends SpeakeasyBase {
    direction?: string;
    isOutboundOnly?: boolean;
    lineId?: string;
    lineName?: string;
    lineStrings?: string[];
    mode?: string;
    orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[];
    stations?: TflApiPresentationEntitiesMatchedStop[];
    stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[];
}

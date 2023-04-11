import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
export declare enum TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class TflApiPresentationEntitiesStopPointSequence extends SpeakeasyBase {
    /**
     * The id of this branch.
     */
    branchId?: number;
    direction?: string;
    lineId?: string;
    lineName?: string;
    /**
     * The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be
     *
     * @remarks
     *             identical in the case of a looped route e.g. the Circle line.
     */
    nextBranchIds?: number[];
    /**
     * The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be
     *
     * @remarks
     *             identical in the case of a looped route e.g. the Circle line.
     */
    prevBranchIds?: number[];
    serviceType?: TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum;
    stopPoint?: TflApiPresentationEntitiesMatchedStop[];
}

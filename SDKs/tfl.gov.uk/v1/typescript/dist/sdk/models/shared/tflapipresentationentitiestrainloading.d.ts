import { SpeakeasyBase } from "../../../internal/utils";
export declare class TflApiPresentationEntitiesTrainLoading extends SpeakeasyBase {
    /**
     * Direction in regards to Journey Planner i.e. inbound or outbound
     */
    direction?: string;
    /**
     * The Line Name e.g. "Victoria"
     */
    line?: string;
    /**
     * Direction of the Line e.g. NB, SB, WB etc.
     */
    lineDirection?: string;
    /**
     * Naptan of the adjacent station
     */
    naptanTo?: string;
    /**
     * Direction displayed on the platform e.g. NB, SB, WB etc.
     */
    platformDirection?: string;
    /**
     * Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
     */
    timeSlice?: string;
    /**
     * Scale between 1-6,
     *
     * @remarks
     *              1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy
     */
    value?: number;
}

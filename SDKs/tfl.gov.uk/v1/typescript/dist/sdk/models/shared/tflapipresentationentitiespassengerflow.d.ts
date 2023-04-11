import { SpeakeasyBase } from "../../../internal/utils";
export declare class TflApiPresentationEntitiesPassengerFlow extends SpeakeasyBase {
    /**
     * Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.
     */
    timeSlice?: string;
    /**
     * Count of passenger flow towards a platform
     */
    value?: number;
}

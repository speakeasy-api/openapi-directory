import { SpeakeasyBase } from "../../../internal/utils";
import { Instrument } from "./instrument";
/**
 * Image search results
 */
export declare class InstrumentsListResult extends SpeakeasyBase {
    /**
     * List of instrumnets
     */
    data?: Instrument[];
    /**
     * Current page that is returned
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
}

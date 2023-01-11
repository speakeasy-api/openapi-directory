import { SpeakeasyBase } from "../../../internal/utils";
import { Instrument } from "./instrument";
/**
 * Image search results
**/
export declare class InstrumentsListResult extends SpeakeasyBase {
    data?: Instrument[];
    page?: number;
    perPage?: number;
}

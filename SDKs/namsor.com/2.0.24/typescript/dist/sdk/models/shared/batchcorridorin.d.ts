import { SpeakeasyBase } from "../../../internal/utils";
import { CorridorIn } from "./corridorin";
import { FactIn } from "./factin";
/**
 * A list of name pairs, with country code (nameFrom -> nameTo).
 */
export declare class BatchCorridorIn extends SpeakeasyBase {
    corridorFromTo?: CorridorIn[];
    facts?: FactIn[];
}

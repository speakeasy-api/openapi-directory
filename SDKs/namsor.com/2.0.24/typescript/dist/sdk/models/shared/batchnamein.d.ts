import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { NameIn } from "./namein";
/**
 * A list of proper names
 */
export declare class BatchNameIn extends SpeakeasyBase {
    facts?: FactIn[];
    properNouns?: NameIn[];
}

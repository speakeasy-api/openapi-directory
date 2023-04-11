import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { PersonalNameIn } from "./personalnamein";
/**
 * A list of personal names
 */
export declare class BatchPersonalNameIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: PersonalNameIn[];
}

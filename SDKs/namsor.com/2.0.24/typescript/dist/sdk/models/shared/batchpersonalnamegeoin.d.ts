import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { PersonalNameGeoIn } from "./personalnamegeoin";
/**
 * A list of personal names, with a country ISO2 code
 */
export declare class BatchPersonalNameGeoIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: PersonalNameGeoIn[];
}

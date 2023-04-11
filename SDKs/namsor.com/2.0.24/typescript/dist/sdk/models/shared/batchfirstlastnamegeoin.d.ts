import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";
/**
 * A list of personal names
 */
export declare class BatchFirstLastNameGeoIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: FirstLastNameGeoIn[];
}

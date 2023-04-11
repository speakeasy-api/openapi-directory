import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { FirstLastNameIn } from "./firstlastnamein";
/**
 * A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
 */
export declare class BatchFirstLastNameIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: FirstLastNameIn[];
}

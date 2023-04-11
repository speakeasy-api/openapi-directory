import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { FirstLastNameGenderIn } from "./firstlastnamegenderin";
/**
 * A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
 */
export declare class BatchFirstLastNameGenderIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: FirstLastNameGenderIn[];
}

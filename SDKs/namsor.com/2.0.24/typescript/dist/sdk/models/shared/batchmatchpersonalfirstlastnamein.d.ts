import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { MatchPersonalFirstLastNameIn } from "./matchpersonalfirstlastnamein";
/**
 * A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname
 */
export declare class BatchMatchPersonalFirstLastNameIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: MatchPersonalFirstLastNameIn[];
}

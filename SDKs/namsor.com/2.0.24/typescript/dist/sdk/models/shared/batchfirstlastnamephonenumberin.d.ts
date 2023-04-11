import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { FirstLastNamePhoneNumberIn } from "./firstlastnamephonenumberin";
/**
 * A list of personal names
 */
export declare class BatchFirstLastNamePhoneNumberIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberIn[];
}

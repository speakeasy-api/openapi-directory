import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { FirstLastNamePhoneNumberGeoIn } from "./firstlastnamephonenumbergeoin";
/**
 * A list of personal names
 */
export declare class BatchFirstLastNamePhoneNumberGeoIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberGeoIn[];
}

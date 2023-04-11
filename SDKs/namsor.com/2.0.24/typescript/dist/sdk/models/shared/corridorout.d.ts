import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";
/**
 * Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
 */
export declare class CorridorOut extends SpeakeasyBase {
    /**
     * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
     */
    firstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut;
    /**
     * Represents the output of inferring the LIKELY gender from a personal name.
     */
    firstLastNameGenderedOut?: FirstLastNameGenderedOut;
    /**
     * Represents the output of inferring the LIKELY country of Origin from a personal name.
     */
    firstLastNameOriginedOut?: FirstLastNameOriginedOut;
    id?: string;
    script?: string;
}

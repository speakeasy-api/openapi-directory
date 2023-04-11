import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameUSRaceEthnicityOut } from "./firstlastnameusraceethnicityout";
/**
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
 */
export declare class BatchFirstLastNameUSRaceEthnicityOut extends SpeakeasyBase {
    /**
     * Classified US 'race'/ethnicized names
     */
    personalNames?: FirstLastNameUSRaceEthnicityOut[];
}

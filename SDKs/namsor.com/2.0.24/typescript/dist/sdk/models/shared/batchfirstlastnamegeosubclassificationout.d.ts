import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGeoSubclassificationOut } from "./firstlastnamegeosubclassificationout";
/**
 * Represents the output of inferring the LIKELY country subclassification (regional names).
 */
export declare class BatchFirstLastNameGeoSubclassificationOut extends SpeakeasyBase {
    /**
     * Classified names at sub country level (region or state)
     */
    personalNames?: FirstLastNameGeoSubclassificationOut[];
}

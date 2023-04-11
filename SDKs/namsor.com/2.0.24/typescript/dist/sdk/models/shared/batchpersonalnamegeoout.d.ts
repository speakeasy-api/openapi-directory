import { SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameGeoOut } from "./personalnamegeoout";
/**
 * A list of genderized names.
 */
export declare class BatchPersonalNameGeoOut extends SpeakeasyBase {
    /**
     * Classified geo names
     */
    personalNames?: PersonalNameGeoOut[];
}

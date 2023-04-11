import { SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
/**
 * City List Response
 */
export declare class CitiesListResponse extends SpeakeasyBase {
    /**
     * City collection.
     */
    cities?: City[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".
     */
    kind?: string;
}

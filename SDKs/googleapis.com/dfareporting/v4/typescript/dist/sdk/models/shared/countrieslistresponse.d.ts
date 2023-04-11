import { SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";
/**
 * Country List Response
 */
export declare class CountriesListResponse extends SpeakeasyBase {
    /**
     * Country collection.
     */
    countries?: Country[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".
     */
    kind?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Country
 */
export declare class Country extends SpeakeasyBase {
    /**
     * Country code (ISO 3166)
     */
    countryCode?: string;
    /**
     * Names of the entity - multi-lingual fields
     */
    names?: Record<string, string>;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Country targeting specification.
 */
export declare class CountryTargeting extends SpeakeasyBase {
    /**
     * Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).
     */
    countries?: string[];
    /**
     * Include "rest of world" as well as explicitly targeted countries.
     */
    includeRestOfWorld?: boolean;
}

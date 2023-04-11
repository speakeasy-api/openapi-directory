import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A location/region designation for language.
 */
export declare class Locale extends SpeakeasyBase {
    /**
     * The id for this locale. Example: "en_US".
     */
    id?: string;
    /**
     * A human-friendly name for this language/locale. Example: "English".
     */
    name?: string;
    /**
     * A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale.
     */
    region?: string;
    /**
     * Tags for this dimension. Example: "default".
     */
    tags?: string[];
}

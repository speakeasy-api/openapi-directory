import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
/**
 * Language Targeting.
 */
export declare class LanguageTargeting extends SpeakeasyBase {
    /**
     * Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated.
     */
    languages?: Language[];
}

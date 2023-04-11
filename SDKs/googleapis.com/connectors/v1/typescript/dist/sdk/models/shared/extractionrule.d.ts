import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Extraction Rule.
 */
export declare class ExtractionRule extends SpeakeasyBase {
    /**
     * Regex used to extract backend details from source. If empty, whole source value will be used.
     */
    extractionRegex?: string;
    /**
     * Source to extract the backend from.
     */
    source?: Source;
}

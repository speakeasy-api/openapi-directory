import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Classified typed proper names
 */
export declare class ProperNounCategorizedOut extends SpeakeasyBase {
    /**
     * The most likely common name type
     */
    commonType?: string;
    /**
     * Best alternative for : The most likely common name type
     */
    commonTypeAlt?: string;
    id?: string;
    /**
     * The input name
     */
    name?: string;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Explanation for a single feature.
 */
export declare class Explanation extends SpeakeasyBase {
    /**
     * Attribution of feature.
     */
    attribution?: number;
    /**
     * The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters.
     */
    featureName?: string;
}

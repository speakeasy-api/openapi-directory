import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
 */
export declare class GoogleCloudRetailV2betaRuleTwowaySynonymsAction extends SpeakeasyBase {
    /**
     * Defines a set of synonyms. Can specify up to 100 synonyms. Must specify at least 2 synonyms.
     */
    synonyms?: string[];
}

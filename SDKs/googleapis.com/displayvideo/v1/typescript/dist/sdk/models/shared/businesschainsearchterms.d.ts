import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search terms for Business Chain targeting options. At least one of the field should be populated.
 */
export declare class BusinessChainSearchTerms extends SpeakeasyBase {
    /**
     * The search query for the desired business chain. The query must be the full name of the business, e.g. "KFC", "mercedes-benz".
     */
    businessChainQuery?: string;
    /**
     * The search query for the desired geo region, e.g. "Seattle", "United State".
     */
    regionQuery?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Issue associated with the collection.
 */
export declare class CollectionStatusItemLevelIssue extends SpeakeasyBase {
    /**
     * Country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
     */
    applicableCountries?: string[];
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attributeName?: string;
    /**
     * The error code of the issue.
     */
    code?: string;
    /**
     * A short issue description in English.
     */
    description?: string;
    /**
     * The destination the issue applies to.
     */
    destination?: string;
    /**
     * A detailed issue description in English.
     */
    detail?: string;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string;
    /**
     * How this issue affects the serving of the collection.
     */
    servability?: string;
}

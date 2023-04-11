import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductStatusItemLevelIssue extends SpeakeasyBase {
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
     * How this issue affects serving of the offer.
     */
    servability?: string;
}

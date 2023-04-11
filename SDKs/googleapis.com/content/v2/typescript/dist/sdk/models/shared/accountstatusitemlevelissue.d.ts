import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountStatusItemLevelIssue extends SpeakeasyBase {
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
     * A detailed issue description in English.
     */
    detail?: string;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string;
    /**
     * Number of items with this issue.
     */
    numItems?: string;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string;
    /**
     * How this issue affects serving of the offer.
     */
    servability?: string;
}

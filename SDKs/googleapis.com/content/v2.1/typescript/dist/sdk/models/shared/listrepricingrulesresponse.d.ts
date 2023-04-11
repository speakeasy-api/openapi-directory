import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRule } from "./repricingrule";
/**
 * Response message for the `ListRepricingRules` method.
 */
export declare class ListRepricingRulesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The rules from the specified merchant.
     */
    repricingRules?: RepricingRule[];
}

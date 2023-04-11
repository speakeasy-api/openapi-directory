import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a custom tag specified for base plans and subscription offers.
 */
export declare class OfferTag extends SpeakeasyBase {
    /**
     * Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters.
     */
    tag?: string;
}

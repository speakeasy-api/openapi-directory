import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a web property reference.
 */
export declare class WebPropertyRef extends SpeakeasyBase {
    /**
     * Account ID to which this web property belongs.
     */
    accountId?: string;
    /**
     * Link for this web property.
     */
    href?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string;
    /**
     * Analytics web property reference.
     */
    kind?: string;
    /**
     * Name of this web property.
     */
    name?: string;
}

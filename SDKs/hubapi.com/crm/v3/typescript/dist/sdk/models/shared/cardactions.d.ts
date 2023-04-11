import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for custom user actions on cards.
 */
export declare class CardActions extends SpeakeasyBase {
    /**
     * A list of URL prefixes that will be accepted for card action URLs. If your data fetch response includes an action URL that doesn't begin with one of these values, it will result in an error and the card will not be displayed.
     */
    baseUrls: string[];
}

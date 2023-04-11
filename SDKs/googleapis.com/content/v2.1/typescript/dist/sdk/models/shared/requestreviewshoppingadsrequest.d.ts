import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the RequestReviewShoppingAds program method.
 */
export declare class RequestReviewShoppingAdsRequest extends SpeakeasyBase {
    /**
     * The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested.
     */
    regionCode?: string;
}

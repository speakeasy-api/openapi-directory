import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detected advertiser and brand information.
 */
export declare class AdvertiserAndBrand extends SpeakeasyBase {
    /**
     * See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
     */
    advertiserId?: string;
    /**
     * Advertiser name. Can be used to filter the response of the creatives.list method.
     */
    advertiserName?: string;
    /**
     * Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
     */
    brandId?: string;
    /**
     * Brand name. Can be used to filter the response of the creatives.list method.
     */
    brandName?: string;
}

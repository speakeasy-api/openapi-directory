import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Media } from "./googlecloudchannelv1media";
/**
 * Represents the marketing information for a Product, SKU or Offer.
 */
export declare class GoogleCloudChannelV1MarketingInfo extends SpeakeasyBase {
    /**
     * Represents media information.
     */
    defaultLogo?: GoogleCloudChannelV1Media;
    /**
     * Human readable description. Description can contain HTML.
     */
    description?: string;
    /**
     * Human readable name.
     */
    displayName?: string;
}

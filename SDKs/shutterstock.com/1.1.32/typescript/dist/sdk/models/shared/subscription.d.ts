import { SpeakeasyBase } from "../../../internal/utils";
import { Allotment } from "./allotment";
import { LicenseFormat } from "./licenseformat";
import { Price } from "./price";
/**
 * Subscription information
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * An allotment of credits as part of a subscription
     */
    allotment?: Allotment;
    /**
     * Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)
     */
    assetType?: string;
    /**
     * Description of the subscription
     */
    description?: string;
    /**
     * Date the subscription ends
     */
    expirationTime?: Date;
    /**
     * List of formats that are licensable for the subscription
     */
    formats?: LicenseFormat[];
    /**
     * Unique internal identifier for the subscription
     */
    id: string;
    /**
     * Internal identifier for the type of subscription
     */
    license?: string;
    /**
     * Subscription metadata; different for each customer
     */
    metadata?: Record<string, any>;
    /**
     * Price
     */
    pricePerDownload?: Price;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShippingMethodEditShippingMethod extends SpeakeasyBase {
    /**
     * URL that receives the shipping data and returns rates
     */
    callbackUrl?: string;
    /**
     * City/Municipality name of origin
     */
    city?: string;
    /**
     * URL that returns available shipping services
     */
    fetchServicesUrl?: string;
    /**
     * Name of the Shipping Method
     */
    name?: string;
    /**
     * Postal/Zipcode of origin
     */
    postal?: string;
    /**
     * State/Region code of origin
     */
    state?: string;
    /**
     * Token used to authentica on the the fetch_services_url
     */
    token?: string;
}
/**
 * Shipping Method parameters.
 */
export declare class ShippingMethodEdit extends SpeakeasyBase {
    shippingMethod?: ShippingMethodEditShippingMethod;
}

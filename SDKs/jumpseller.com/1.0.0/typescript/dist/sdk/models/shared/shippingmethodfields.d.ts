import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingService } from "./shippingservice";
/**
 * Type of the Shipping Method
 */
export declare enum ShippingMethodFieldsTypeEnum {
    Free = "free",
    Tables = "tables",
    Correiosbr = "correiosbr",
    CorreosChile = "correos_chile",
    Chilexpress = "chilexpress",
    Flat = "flat",
    Ups = "ups",
    External = "external"
}
export declare class ShippingMethodFields extends SpeakeasyBase {
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
     * Unique identifier of the Shipping Method
     */
    id?: number;
    /**
     * Name of the Shipping Method
     */
    name?: string;
    /**
     * Postal/Zipcode of origin
     */
    postal?: string;
    services?: ShippingService[];
    /**
     * State/Region code of origin
     */
    state?: string;
    /**
     * Type of the Shipping Method
     */
    type?: ShippingMethodFieldsTypeEnum;
}

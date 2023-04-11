import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service offered by the carrier
 */
export declare class ListCarrierServicesResponseBodyService extends SpeakeasyBase {
    carrierCode?: string;
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId?: string;
    /**
     * Supports domestic shipping
     */
    domestic?: boolean;
    /**
     * Supports international shipping.
     */
    international?: boolean;
    /**
     * Carrier supports multiple packages per shipment
     */
    isMultiPackageSupported?: boolean;
    /**
     * User friendly service name
     */
    name?: string;
    /**
     * service code
     */
    serviceCode?: string;
}
/**
 * A carrier list services response body
 */
export declare class ListCarrierServicesResponseBody extends SpeakeasyBase {
    /**
     * An array of services associated with the carrier
     */
    services?: ListCarrierServicesResponseBodyService[];
}

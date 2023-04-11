import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * Advanced options that are specific to the carrier
 */
export declare class GetCarrierByIdResponseBodyCarrierAdvancedOption extends SpeakeasyBase {
    /**
     * Default value of option
     */
    defaultValue?: string;
    /**
     * Description of option
     */
    description?: string;
    /**
     * Name of advanced option
     */
    name?: string;
}
/**
 * A package type that a carrier supports for shipment.
 */
export declare class GetCarrierByIdResponseBodyPackageType extends SpeakeasyBase {
    /**
     * Provides a helpful description for the custom package.
     */
    description?: string;
    /**
     * The custom dimensions for the package.
     */
    dimensions?: Dimensions;
    name: string;
    packageCode: string;
    /**
     * A string that uniquely identifies the package.
     */
    packageId?: string;
}
/**
 * A service offered by the carrier
 */
export declare class GetCarrierByIdResponseBodyService extends SpeakeasyBase {
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
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 *
 * @remarks
 * that has been tied to the current account.
 *
 */
export declare class GetCarrierByIdResponseBody extends SpeakeasyBase {
    /**
     * The account number that the carrier is connected to.
     */
    accountNumber?: string;
    /**
     * Current available balance
     */
    balance?: number;
    /**
     * A string that uniquely identifies the carrier.
     */
    carrierCode?: string;
    /**
     * A string that uniquely identifies the carrier.
     */
    carrierId?: string;
    /**
     * Screen readable name
     */
    friendlyName?: string;
    /**
     * Carrier supports multiple packages per shipment
     */
    hasMultiPackageSupportingServices?: boolean;
    /**
     * Nickname given to the account when initially setting up the carrier.
     */
    nickname?: string;
    /**
     * A list of options that are available to that carrier
     */
    options?: GetCarrierByIdResponseBodyCarrierAdvancedOption[];
    /**
     * A list of package types that are supported by the carrier
     */
    packages?: GetCarrierByIdResponseBodyPackageType[];
    /**
     * Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
     */
    primary?: boolean;
    /**
     * Indicates whether the carrier requires funding to use its services
     */
    requiresFundedAmount?: boolean;
    /**
     * A list of services that are offered by the carrier
     */
    services?: GetCarrierByIdResponseBodyService[];
    /**
     * The carrier supports adding custom label messages to an order.
     */
    supportsLabelMessages?: boolean;
}
